"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@components/ui/button";
import domtoimage from "dom-to-image";
import toast from "react-hot-toast";
import classnames from "classnames";
import { FiSave } from "react-icons/fi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { BiReset } from "react-icons/bi";
import { FaRegClipboard } from "react-icons/fa";
import { FaPaste } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CgColorPicker } from "react-icons/cg";
import { TiLockClosed } from "react-icons/ti";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const isValidHexColor = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";

export default function Main(props) {
  const router = useRouter();
  const { toast: toast2 } = useToast();
  const wrapperRef = useRef();
  const isPro = props.isPro;

  // const [isPro, setIsPro] = useState(false);
  const [isWatermark, setIsWatermark] = useState(true);
  const [blob, setBlob] = useState({ src: null, w: 0, h: 0 });
  const [zoomLevel, setZoomLevel] = useState(50);
  const [OuterZoomLevel, setOuterZoomLevel] = useState(50);
  const [bgPicker, setBGPicker] = useState(false);
  const [options, setOptions] = useState({
    aspectRatio: "aspect-auto",
    theme: "bg-gradient-to-br from-indigo-400 via-blue-400 to-purple-600",
    customTheme: {
      colorStart: "#ff40ff",
      colorEnd: "#fec700",
    },
    padding: "50px",
    rounded: "10px",
    position: "",
    roundedWrapper: "10px",
    shadow: "shadow-xl",
    noise: false,
    browserBar: "hidden",
  });

  // Function to handle zoom out
  const handleZoomChange = (e) => {
    const selectedZoom = parseInt(e.target.value, 10);
    setOuterZoomLevel(selectedZoom);
  };

  const handleRoundedWrapperChange = (value) => {
    const newRoundedWrapper = `${value}px`;
    console.log(newRoundedWrapper);
    setOptions({ ...options, roundedWrapper: newRoundedWrapper });
  };

  const handleRoundedChange = (value) => {
    const newRounded = `${value}px`;
    console.log(newRounded);
    setOptions({ ...options, rounded: newRounded });
  };

  const handlePaddingChange = (value) => {
    const newPadding = `${value}px`;
    console.log(newPadding);
    setOptions({ ...options, padding: newPadding });
  };

  useEffect(() => {
    const preset = localStorage.getItem("options");
    if (preset) {
      setOptions(JSON.parse(preset));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleShortcuts);

    return () => {
      document.removeEventListener("keydown", handleShortcuts);
    };
  }, [blob]);

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  const handleShortcuts = (e) => {
    if ((e.key === "c" && e.ctrlKey) || (e.key === "c" && e.metaKey)) {
      e.preventDefault();
      copyImage();
    }

    if ((e.key === "s" && e.ctrlKey) || (e.key === "s" && e.metaKey)) {
      e.preventDefault();
      saveImage();
    }
  };

  const snapshotCreator = () => {
    return new Promise((resolve, reject) => {
      try {
        const scale = window.devicePixelRatio;
        const element = wrapperRef.current; // You can use element's ID or Class here
        domtoimage
          .toBlob(element, {
            height: element.offsetHeight * scale,
            width: element.offsetWidth * scale,
            style: {
              transform: "scale(" + scale + ")",
              transformOrigin: "top left",
              width: element.offsetWidth + "px",
              height: element.offsetHeight + "px",
            },
          })
          .then((blob) => {
            resolve(blob);
          });
      } catch (e) {
        reject(e);
      }
    });
  };

  const saveImage = async () => {
    if (!blob?.src) {
      toast.error("Nothing to save, make sure to add a screenshot first!");
      return;
    }
    if (window.pirsch) {
      pirsch("🎉 Screenshot saved");
    }
    let savingToast = toast.loading("Exporting image...");
    const scale = window.devicePixelRatio;
    domtoimage
      .toPng(wrapperRef.current, {
        height: wrapperRef.current.offsetHeight * scale,
        width: wrapperRef.current.offsetWidth * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left",
          width: wrapperRef.current.offsetWidth + "px",
          height: wrapperRef.current.offsetHeight + "px",
        },
      })
      .then(async (data) => {
        domtoimage
          .toPng(wrapperRef.current, {
            height: wrapperRef.current.offsetHeight * scale,
            width: wrapperRef.current.offsetWidth * scale,
            style: {
              transform: "scale(" + scale + ")",
              transformOrigin: "top left",
              width: wrapperRef.current.offsetWidth + "px",
              height: wrapperRef.current.offsetHeight + "px",
            },
          })
          .then(async (data) => {
            var a = document.createElement("A");
            a.href = data;
            a.download = `shotune-${new Date().toISOString()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            toast.success("Image exported!", { id: savingToast });
          });
      });
  };

  const saveAsSVG = async () => {
    if (!isPro) {
      toast2({
        description: "Ungrade to Pro to use this feature!",
        action: (
          <ToastAction
            altText="Upgrade"
            onClick={() => router.push("/landing#pricing")}
          >
            Get Started
          </ToastAction>
        ),
      });
      return;
    }

    if (!blob?.src) {
      toast.error("Nothing to save, make sure to add a screenshot first!");
      return;
    }
    if (window.pirsch) {
      pirsch("🎉 SVG saved");
    }
    let savingToast = toast.loading("Exporting SVG...");
    const scale = window.devicePixelRatio;
    domtoimage
      .toSvg(wrapperRef.current, {
        height: wrapperRef.current.offsetHeight * scale,
        width: wrapperRef.current.offsetWidth * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left",
          width: wrapperRef.current.offsetWidth + "px",
          height: wrapperRef.current.offsetHeight + "px",
        },
      })
      .then(async (dataUrl) => {
        var a = document.createElement("A");
        a.href = dataUrl;
        a.download = `shotune-${new Date().toISOString()}.svg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        toast.success("SVG exported!", { id: savingToast });
      })
      .catch((error) => {
        console.error("Error exporting SVG:", error);
        toast.error("Error exporting SVG", { id: savingToast });
      });
  };

  const saveImageAsWebP = async () => {
    if (!isPro) {
      toast2({
        description: "Ungrade to Pro to use this feature!",
        action: (
          <ToastAction
            altText="Upgrade"
            onClick={() => router.push("/landing#pricing")}
          >
            Get Started
          </ToastAction>
        ),
      });
      return;
    }

    if (!blob?.src) {
      toast.error("Nothing to save, make sure to add a screenshot first!");
      return;
    }
    if (window.pirsch) {
      pirsch("🎉 Screenshot saved as WebP");
    }
    let savingToast = toast.loading("Exporting image as WebP...");
    const scale = window.devicePixelRatio;
    domtoimage
      .toPng(wrapperRef.current, {
        height: wrapperRef.current.offsetHeight * scale,
        width: wrapperRef.current.offsetWidth * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left",
          width: wrapperRef.current.offsetWidth + "px",
          height: wrapperRef.current.offsetHeight + "px",
        },
      })
      .then(async (data) => {
        const webpData = await convertToWebP(data);
        var a = document.createElement("A");
        a.href = webpData;
        a.download = `shotune-${new Date().toISOString()}.webp`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        toast.success("Image exported as WebP!", { id: savingToast });
      });
  };

  const convertToWebP = async (pngData) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = pngData;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          resolve(URL.createObjectURL(blob));
        }, "image/webp");
      };
      img.onerror = (error) => {
        reject(error);
      };
    });
  };

  const saveAsJPG = () => {
    if (!blob?.src) {
      toast.error("Nothing to save, make sure to add a screenshot first!");
      return;
    }
    if (window.pirsch) {
      pirsch("🎉 Screenshot saved");
    }
    let savingToast = toast.loading("Exporting image...");
    const scale = window.devicePixelRatio;

    domtoimage
      .toJpeg(wrapperRef.current, {
        quality: 0.95, // Adjust the quality as needed (0.0 to 1.0)
        height: wrapperRef.current.offsetHeight * scale,
        width: wrapperRef.current.offsetWidth * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left",
          width: wrapperRef.current.offsetWidth + "px",
          height: wrapperRef.current.offsetHeight + "px",
        },
      })
      .then(async (dataUrl) => {
        var a = document.createElement("A");
        a.href = dataUrl;
        a.download = `shotune-${new Date().toISOString()}.jpeg`; // Use .jpeg extension
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        toast.success("Image exported!", { id: savingToast });
      });
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  const copyImage = () => {
    if (!blob?.src) {
      toast.error("Nothing to copy, make sure to add a screenshot first!");
      return;
    }
    const isSafari = /^((?!chrome|android).)*safari/i.test(
      navigator?.userAgent
    );
    const isNotFirefox = navigator.userAgent.indexOf("Firefox") < 0;
    if (window.pirsch) {
      pirsch("🙌 Screenshot copied");
    }

    if (isSafari) {
      navigator.clipboard
        .write([
          new ClipboardItem({
            "image/png": new Promise(async (resolve, reject) => {
              try {
                await snapshotCreator();
                const blob = await snapshotCreator();
                resolve(new Blob([blob], { type: "image/png" }));
              } catch (err) {
                reject(err);
              }
            }),
          }),
        ])
        .then(() => toast.success("Image copied to clipboard"))
        .catch((err) =>
          // Error
          toast.success(err)
        );
    } else if (isNotFirefox) {
      navigator?.permissions
        ?.query({ name: "clipboard-write" })
        .then(async (result) => {
          if (result.state === "granted") {
            const type = "image/png";
            await snapshotCreator();
            const blob = await snapshotCreator();
            let data = [new ClipboardItem({ [type]: blob })];
            navigator.clipboard
              .write(data)
              .then(() => toast.success("Image copied to clipboard"))
              .catch((err) => {
                // Error
                console.error("Error:", err);
              });
          }
        });
    } else {
      alert("Firefox does not support this functionality");
    }
  };

  const onPaste = (event) => {
    var items =
      (event?.clipboardData || event?.originalEvent?.clipboardData)?.items ||
      event?.target?.files ||
      event?.dataTransfer?.files;
    var index = 0;
    for (index in items) {
      var item = items[index];
      if (item.kind === "file" || item?.type?.includes("image")) {
        var blob = item?.kind ? item.getAsFile() : item;
        var reader = new FileReader();
        reader.onload = function (event) {
          setBlob({ ...blob, src: event.target.result });
        };
        reader.readAsDataURL(blob);
      }
    }
  };

  const pickBackground = () => {
    return (
      <>
        {bgPicker ? (
          <div
            className="fixed inset-0 w-full h-full bg-transparent"
            onClick={() => setBGPicker(false)}
          />
        ) : (
          ""
        )}
        <div
          className={classnames(
            "absolute w-auto max-w-[400px] z-10 top-[calc(100%)] left-[0px] bg-white/80 backdrop-blur shadow-lg py-4 px-5 rounded-xl flex shadow-gray-500/50 dark:shadow-black/80 border border-gray-400 flex-col dark:border-gray-800 dark:bg-black/80 duration-200",
            {
              "opacity-0 pointer-events-none scale-[0.9]": !bgPicker,
            },
            {
              "opacity-100 pointer-events-auto scale-[1]": bgPicker,
            }
          )}
        >
          <div
            className="absolute top-[5%] right-[5%] opacity-50 cursor-pointer hover:opacity-100 z-10 text-black"
            onClick={() => setBGPicker(false)}
          >
            ✕
          </div>
          <div className="relative mb-3">
            {/* Pick Start Color */}
            <div className="mb-1 text-black">Pick first color</div>
            <div className="flex items-center">
              <div className="relative group">
                <input
                  id="startColorPicker"
                  type="color"
                  className="absolute top-0 left-0 w-8 h-12 rounded-full opacity-0 cursor-pointer"
                  value={options.customTheme.colorStart || "#222"}
                  onChange={(e) =>
                    setOptions({
                      ...options,
                      customTheme: {
                        ...options.customTheme,
                        colorStart: e.target.value,
                      },
                    })
                  }
                />
                <label
                  style={{
                    backgroundColor: options?.customTheme?.colorStart || "#222",
                  }}
                  htmlFor="startColorPicker"
                  className="left-0 flex items-center justify-center w-12 h-12 rounded-full pointer-events-none text-white/50 group-hover:scale-[1.1] duration-100"
                >
                  <span className="font-mono text-xs text-white/80 drop-shadow">
                    Pick
                  </span>
                </label>
              </div>
              <span className="px-4 opacity-50 text-black">/</span>
              <input
                placeholder="Enter hex value"
                type="text"
                value={options.customTheme.colorStart || "#000000"}
                className="px-2 py-1 font-mono text-base text-black border-2 border-gray-500 rounded-lg focus:outline-none focus:border-black w-40"
                onChange={(e) => {
                  let startColorToast;
                  setOptions({
                    ...options,
                    customTheme: {
                      ...options.customTheme,
                      colorStart: e.target.value,
                    },
                  });
                  if (e.target.value.match(isValidHexColor)) {
                    toast.dismiss(startColorToast);
                    toast.success("First color applied", {
                      id: startColorToast,
                    });
                  } else {
                    toast.dismiss(startColorToast);
                    toast.error("Invalid Hex color", { id: startColorToast });
                  }
                }}
              />
            </div>
          </div>

          {/* Pick End Color */}
          <div>
            <div className="mb-1 text-black">Pick second color</div>
            <div className="flex items-center">
              <div className="relative group">
                <input
                  id="startColorPicker"
                  type="color"
                  className="absolute top-0 left-0 w-8 h-12 rounded-full opacity-0 cursor-pointer"
                  value={options.customTheme.colorEnd || "#222"}
                  onChange={(e) =>
                    setOptions({
                      ...options,
                      customTheme: {
                        ...options.customTheme,
                        colorEnd: e.target.value,
                      },
                    })
                  }
                />
                <label
                  style={{
                    backgroundColor: options?.customTheme?.colorEnd || "#222",
                  }}
                  htmlFor="startColorPicker"
                  className="left-0 flex items-center justify-center w-12  h-12 rounded-full pointer-events-none text-white/50 group-hover:scale-[1.1] duration-100"
                >
                  <span className="font-mono text-xs text-white/80 drop-shadow">
                    Pick
                  </span>
                </label>
              </div>
              <span className="px-4 opacity-50 text-black">/</span>
              <input
                placeholder="Enter hex value"
                type="text"
                value={options.customTheme.colorEnd || "#000000"}
                className="px-2 py-1 font-mono text-base text-black border-2 border-gray-500 rounded-lg focus:outline-none focus:border-black w-40"
                onChange={(e) => {
                  let endColorToast;
                  setOptions({
                    ...options,
                    customTheme: {
                      ...options.customTheme,
                      colorEnd: e.target.value,
                    },
                  });
                  if (e.target.value.match(isValidHexColor)) {
                    toast.dismiss(endColorToast);
                    toast.success("Second color applied", {
                      id: endColorToast,
                    });
                  } else {
                    toast.dismiss(endColorToast);
                    toast.error("Invalid Hex color", { id: endColorToast });
                  }
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderOptions = () => {
    return (
      <div className=" top-0 flex items-center">
        <div
          className={classnames(
            "h-auto  rounded-2xl ring-1 ring-primary dark:ring-primary    shadow-lg    w-full relative  mt-10 lg:mt-0"
          )}
        >
          <div className="absolute inset-0 w-full lg:h-[70vh] lg:scale-y-[1.05] scale-100 lg:scale-x-[1.1] dark:lg:scale-[1.05] lg:max-h-[calc(100vh-60px)] transform-gpu opacity-60" />
          <ScrollArea className="md:h-[60vh] h-[50vh] lg:px-6 px-3 py-2">
            <div className="relative flex flex-row flex-wrap items-start justify-start space-y-5 lg:items-start lg:flex-col lg:space-y-4 gap-2 m-1">
              <div className="flex items-center justify-between w-full mb-[-15px]">
                <div className="text-sm font-semibold dark:text-white">
                  Aspect Ratio
                </div>
                <div className="relative">
                  <select
                    value={options.aspectRatio}
                    className=" px-2 py-1  rounded-lg shadow-lg appearance-none cursor-pointer text-black text-[14px] focus:outline-none  focus:ring-0 w-20"
                    onChange={(e) =>
                      setOptions({ ...options, aspectRatio: e.target.value })
                    }
                  >
                    <option value="aspect-auto">Auto</option>
                    <option value="aspect-square">Square</option>
                    <option value="aspect-[4/3]">4/3</option>
                    <option value="aspect-video">16/9</option>
                    <option value="aspect-[3/2]">3/2</option>
                  </select>
                  <MdOutlineArrowDropDown className="absolute top-[12%] right-[5%] transform pointer-events-none text-black w-6 h-6" />
                </div>
              </div>
              <div className="">
                <Popover>
                  <PopoverTrigger className="bg-primary rounded-sm">
                    <div className="text-sm px-3 mb-[3px]">more</div>
                  </PopoverTrigger>
                  <PopoverContent className="grid grid-cols-2 gap-2">
                    <div
                      onClick={() =>
                        setOptions({
                          ...options,
                          aspectRatio: "aspect-[16/9]",
                        })
                      }
                      className="border-black border-2 rounded-sm px-1 text-center text-sm cursor-pointer hover:border-primary active:border-primary active:bg-primary active:text-white"
                    >
                      Twitter Post
                    </div>
                    <div
                      onClick={() =>
                        setOptions({
                          ...options,
                          aspectRatio: "aspect-[4/5]",
                        })
                      }
                      className="border-black border-2 rounded-sm px-1 text-center text-sm cursor-pointer hover:border-primary active:border-primary active:bg-primary active:text-white"
                    >
                      Insta Post
                    </div>
                    <div
                      onClick={() =>
                        setOptions({
                          ...options,
                          aspectRatio: "aspect-[9/16]",
                        })
                      }
                      className="border-black border-2 rounded-sm px-1 text-center text-sm cursor-pointer hover:border-primary active:border-primary active:bg-primary active:text-white"
                    >
                      Insta Story
                    </div>
                    <div
                      onClick={() =>
                        setOptions({
                          ...options,
                          aspectRatio: "aspect-[400/209]",
                        })
                      }
                      className="border-black border-2 rounded-sm px-1 text-center text-sm cursor-pointer hover:border-primary active:border-primary active:bg-primary active:text-white"
                    >
                      LinkedIn Post
                    </div>
                    <div
                      onClick={() =>
                        setOptions({
                          ...options,
                          aspectRatio: "aspect-[40/21]",
                        })
                      }
                      className="border-black border-2 rounded-sm px-1 text-center text-sm cursor-pointer hover:border-primary active:border-primary active:bg-primary active:text-white"
                    >
                      Facebook Post
                    </div>
                    <div
                      onClick={() =>
                        setOptions({
                          ...options,
                          aspectRatio: "aspect-[16/9]",
                        })
                      }
                      className="border-black border-2 rounded-sm px-1 text-center text-sm cursor-pointer hover:border-primary active:border-primary active:bg-primary active:text-white"
                    >
                      YouTube
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-semibold dark:text-white">
                  Browser Mockup
                </div>
                <div className="relative">
                  <select
                    value={options.browserBar}
                    className="px-2 py-1  border-gray-500 rounded-lg shadow-lg appearance-none cursor-pointer  hover:opacity-100 text-black text-[14px] focus:outline-none focus:ring-0 w-16"
                    onChange={(e) =>
                      setOptions({ ...options, browserBar: e.target.value })
                    }
                  >
                    <option value="hidden">None</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                  <MdOutlineArrowDropDown className="absolute top-[12%] right-[5%] transform pointer-events-none text-black w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-semibold dark:text-white">
                  Image Size
                </div>
                <div>
                  <div className="w-[100%] flex gap-2 items-center">
                    <div className="text-[12px] text-white bg-black px-1 rounded">
                      {parseInt(options.padding.match(/\d+/), 10)}
                    </div>
                    <div className="w-[120px]">
                      <Slider
                        onValueChange={handlePaddingChange}
                        value={[parseInt(options.padding.match(/\d+/), 10)]}
                        max={130}
                        min={25}
                        step={1}
                        className="w-[100%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative flex items-center pb-2 text-sm font-semibold dark:text-white">
                  Background
                  <div className="relative">
                    <div
                      onClick={() => setBGPicker(!bgPicker)}
                      className="flex items-center px-2 py-[2px] ml-2 rounded-lg cursor-pointer bg-primary hover:opacity-90  "
                    >
                      <span className="w-3 h-3 mr-1">
                        <CgColorPicker />
                      </span>
                      Pick
                    </div>
                  </div>
                  {pickBackground()}
                </div>
                <div className="grid flex-wrap grid-cols-6 mt-1 gap-x-4 gap-y-2">
                  {[
                    "bg-gradient-to-br from-pink-300 via-orange-200 to-red-300",
                    "bg-gradient-to-br from-green-300 via-yellow-200 to-green-200",
                    "bg-gradient-to-br from-green-200 via-blue-100 to-blue-300",
                    "bg-gradient-to-br from-indigo-300 via-blue-400 to-purple-500",
                    "bg-gradient-to-br from-red-300 via-orange-300 to-yellow-200",
                    "bg-gradient-to-br from-pink-300 via-pink-400 to-red-400",
                    "bg-gradient-to-br from-slate-400 via-gray-500 to-gray-700",
                    "bg-gradient-to-br from-orange-300 via-orange-400 to-red-400",
                    "bg-gradient-to-br from-teal-300 to-cyan-400",
                    "bg-gradient-to-br from-red-300 to-purple-600",
                    "bg-white",
                    "bg-black",
                  ].map((theme) => (
                    <div
                      key={theme}
                      className={`cursor-pointer shadow dark:shadow-black/20 shadow-gray-500/20 w-8 h-8 rounded-full ${theme}`}
                      onClick={() => {
                        setOptions({
                          ...options,
                          theme: theme,
                          customTheme: false,
                        });
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-semibold dark:text-white">
                  Background roundness
                </div>
                <div></div>
                <div className="flex gap-2 items-center">
                  <div className="text-[12px] text-white bg-black px-1 rounded">
                    {parseInt(options.roundedWrapper.match(/\d+/), 10)}
                  </div>
                  <div className="w-[120px]">
                    <Slider
                      onValueChange={handleRoundedWrapperChange}
                      value={[
                        parseInt(options.roundedWrapper.match(/\d+/), 10),
                      ]}
                      max={24}
                      step={1}
                      className="w-[100%]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-semibold dark:text-white">
                  Screenshot Roundness
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-[12px] text-white bg-black px-1 rounded">
                    {parseInt(options.rounded.match(/\d+/), 10)}
                  </div>
                  <div className="w-[120px]">
                    <Slider
                      onValueChange={handleRoundedChange}
                      value={[parseInt(options.rounded.match(/\d+/), 10)]}
                      max={24}
                      step={1}
                      className="w-[100%]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-semibold dark:text-white">
                  Screenshot Position
                </div>
                <div className="relative">
                  <select
                    value={options.position}
                    className="px-2 py-1  border-gray-500 rounded-lg shadow-lg appearance-none cursor-pointer  hover:opacity-100 text-black text-[14px] focus:outline-none focus:ring-0 w-28"
                    onChange={(e) =>
                      setOptions({ ...options, position: e.target.value })
                    }
                  >
                    <option value="">Center</option>
                    <option value="pl-0 pt-0">Top left</option>
                    <option value="pt-0 pr-0">Top right</option>
                    <option value="pb-0 pl-0">Bottom left</option>
                    <option value="pb-0 pr-0">Bottom right</option>
                  </select>
                  <MdOutlineArrowDropDown className="absolute top-[12%] right-[5%] transform pointer-events-none text-black w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-semibold dark:text-white">
                  Shadow
                </div>
                <div className="relative">
                  <select
                    value={options.shadow}
                    className="px-2 py-1 border-gray-500 rounded-lg shadow-lg appearance-none cursor-pointer  hover:opacity-100 text-black text-[14px] focus:outline-none focus:ring-0 w-[85px]"
                    onChange={(e) =>
                      setOptions({ ...options, shadow: e.target.value })
                    }
                  >
                    <option value="shadow-none">None</option>
                    <option value="shadow-lg">Small</option>
                    <option value="shadow-xl">Medium</option>
                    <option value="shadow-2xl">Large</option>
                    <option value="shadow-inner">Inner</option>
                  </select>
                  <MdOutlineArrowDropDown className="absolute top-[12%] right-[5%] transform pointer-events-none text-black w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-semibold dark:text-white">
                  Noise
                </div>
                <div>
                  <Switch
                    id="checkbox"
                    checked={options?.noise || false}
                    onCheckedChange={(e) =>
                      setOptions({ ...options, noise: !options?.noise })
                    }
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-semibold dark:text-white flex">
                  {!isPro && <TiLockClosed className="w-5 h-5 mr-1" />}
                  Watermark
                </div>
                <div>
                  <Switch
                    id="checkbox"
                    checked={isWatermark}
                    onCheckedChange={(e) => {
                      if (!isPro) {
                        toast2({
                          description: "Ungrade to Pro to use this feature!",
                          action: (
                            <ToastAction
                              altText="Upgrade"
                              onClick={() => router.push("/#pricing")}
                            >
                              Get Started
                            </ToastAction>
                          ),
                        });
                        return;
                      }
                      setIsWatermark((prev) => !prev);
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="sticky flex flex-col gap-3 items-center justify-between w-full lg:px-6 px-3 py-3">
            <div className="flex items-center justify-between w-full">
              <Button onClick={copyImage} className="flex gap-1">
                <FaRegClipboard /> Copy
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center focus:outline-none">
                  Export{" "}
                  <MdOutlineArrowDropDown className=" pointer-events-none text-white w-6 h-6 mt-[2px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={saveImage}
                    className="cursor-pointer"
                  >
                    PNG
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={saveAsJPG}
                    className="cursor-pointer"
                  >
                    JPG
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={saveImageAsWebP}
                    className="cursor-pointer"
                  >
                    {!isPro && <TiLockClosed className="w-5 h-5 mr-1" />}
                    WEBP
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={saveAsSVG}
                    className="cursor-pointer"
                  >
                    {!isPro && <TiLockClosed className="w-5 h-5 mr-1" />}
                    SVG
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* <Button onClick={saveImage} className="flex gap-1">
                <FiSave /> Save
              </Button> */}
              <Button onClick={() => setBlob({})} className="flex gap-1">
                <BiReset /> Reset
              </Button>
            </div>
            <Button
              onClick={() => toast("This feature is coming soon")}
              variant="secondary"
              className="flex gap-1 w-full"
            >
              <FiSave /> Save
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const getImageRadius = () => {
    if (options?.padding == "0px") {
      return "";
    }

    switch (options?.position) {
      case "pl-0 pt-0":
        return "rounded-l-none rounded-tr-none";
      case "pt-0 pr-0":
        return "rounded-r-none rounded-tl-none";
      case "pb-0 pl-0":
        return "rounded-l-none rounded-br-none";
      case "pb-0 pr-0":
        return "rounded-r-none rounded-bl-none";
      default:
        return "";
    }
  };

  const renderBrowserBar = () => {
    switch (options?.browserBar) {
      case "hidden":
        return "";
      case "light":
        return (
          <div
            className={
              "flex items-center w-full px-4 py-[10px] max-md:py-[3px] rounded-t-lg bg-white/80"
            }
          >
            <div className="flex items-center space-x-2 max-md:space-x-1">
              <div className="w-3 h-3 max-md:w-1 max-md:h-1 bg-red-400 rounded-full" />
              <div className="w-3 h-3 max-md:w-1 max-md:h-1 bg-yellow-300 rounded-full" />
              <div className="w-3 h-3 max-md:w-1 max-md:h-1 bg-green-500 rounded-full" />
            </div>
          </div>
        );
      case "dark":
        return (
          <div className="flex items-center w-full px-4 py-[10px] max-md:py-[3px] rounded-t-lg bg-black/40">
            <div className="flex items-center space-x-2 max-md:space-x-1">
              <div className="w-3 h-3 max-md:w-1 max-md:h-1 bg-red-400 rounded-full" />
              <div className="w-3 h-3 max-md:w-1 max-md:h-1 bg-yellow-300 rounded-full" />
              <div className="w-3 h-3 max-md:w-1 max-md:h-1 bg-green-500 rounded-full" />
            </div>
          </div>
        );
      case "default":
        return "";
    }
  };

  return (
    <div
      className="flex flex-col lg:h-screen h-auto px-5 lg:px-10 "
      onPaste={onPaste}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
      onDragLeave={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        onPaste(e);
      }}
    >
      <div className="flex gap-2 py-2 items-center justify-end">
        <div className="text-sm font-semibold dark:text-white">Zoom</div>
        <div className="relative">
          <select
            placeholder="Zoom"
            value={OuterZoomLevel}
            className=" px-2 py-1  rounded-lg shadow-lg appearance-none cursor-pointer text-black text-[14px] focus:outline-none  focus:ring-0 w-20 "
            onChange={handleZoomChange}
          >
            <option value="25">25%</option>
            <option value="50">50%</option>
            <option value="75">75%</option>
            <option value="100">100%</option>
            <option value="150">150%</option>
            <option value="200">200%</option>
          </select>
          <MdOutlineArrowDropDown className="absolute top-[12%] right-[5%] transform pointer-events-none text-black w-6 h-6" />
        </div>
      </div>

      <div className="relative flex  flex-col-reverse w-full lg:flex-row-reverse max-w-[1600px] mx-auto">
        <div className="w-full lg:w-[340px] lg:absolute lg:top-0 lg:left-0">
          {renderOptions()}
        </div>
        <div className="lg:absolute lg:top-0 lg:left-350px w-full lg:h-[80vh] h-[50vh] rounded-lg lg:w-[calc(100%-350px)]  flex flex-col items-center justify-center overflow-auto ring-1 ring-opacity-20 ring-primary">
          {blob?.src ? (
            <div
              style={
                {
                  // transform: `scale(${OuterZoomLevel / 100}) translate(0%, 0%)`,
                }
              }
              className={`relative overflow-auto shadow-xl duration-200 ease-in-out my-5 w-full h-full  flex items-center justify-center`}
            >
              <div
                ref={(el) => (wrapperRef.current = el)}
                style={{
                  ...(options?.customTheme
                    ? {
                        transform: `scale(${
                          OuterZoomLevel / 100
                        }) translate(0%, 0%)`,
                        borderRadius: `${options?.roundedWrapper}`,

                        // padding: options?.position
                        //   ? ""
                        //   : `${options?.padding}`,

                        // padding: "",
                        // paddingTop: "0px",

                        background: `linear-gradient(45deg, ${
                          options?.customTheme?.colorStart || "transparent"
                        }, ${options?.customTheme?.colorEnd || "transparent"})`,
                      }
                    : {
                        // padding: options?.position ? "" : `${options?.padding}`,
                        transform: `scale(${
                          OuterZoomLevel / 100
                        }) translate(0%, 0%)`,

                        borderRadius: `${options?.roundedWrapper}`,
                      }),
                  ...(options?.position && options?.position === "pt-0 pr-0"
                    ? {
                        paddingTop: "0px",
                        paddingRight: "0px",
                        paddingLeft: options.padding,
                        paddingBottom: options.padding,
                      }
                    : {}),
                  ...(options?.position && options?.position === "pl-0 pt-0"
                    ? {
                        paddingTop: "0px",
                        paddingRight: options.padding,
                        paddingLeft: "0px",
                        paddingBottom: options.padding,
                      }
                    : {}),
                  ...(options?.position && options?.position === "pb-0 pl-0"
                    ? {
                        paddingTop: options.padding,
                        paddingRight: options.padding,
                        paddingLeft: "0px",
                        paddingBottom: "0px",
                      }
                    : {}),
                  ...(options?.position && options?.position === "pb-0 pr-0"
                    ? {
                        paddingTop: options.padding,
                        paddingRight: "0px",
                        paddingLeft: options.padding,
                        paddingBottom: "0px",
                      }
                    : {}),
                }}
                className={classnames(
                  "transition-all duration-200 relative ease-in-out flex items-center justify-center overflow-hidden flex-col",
                  options?.aspectRatio,
                  options?.position,
                  { [options?.theme]: !options.customTheme }
                )}
              >
                <div
                  style={{
                    transform: `scale(${
                      parseInt(options.padding.match(/\d+/), 10) / 100
                    }) translate(0%, 0%)`,
                  }}
                  className=""
                >
                  {renderBrowserBar()}
                  {options?.noise ? (
                    <div
                      style={
                        options.browserBar !== "hidden"
                          ? {
                              backgroundImage: `url("/noise.svg")`,
                              borderTopRightRadius: "0px",
                              borderTopLeftRadius: "0px",
                            }
                          : {
                              backgroundImage: `url("/noise.svg")`,
                            }
                      }
                      className={`absolute inset-0 w-full h-full bg-repeat opacity-[0.15]`}
                    />
                  ) : (
                    ""
                  )}
                  <img
                    src={blob?.src}
                    style={{
                      ...(blob?.w
                        ? {
                            width: blob?.w / window.devicePixelRatio + "px",
                          }
                        : {}),
                      ...(options.browserBar !== "hidden"
                        ? {
                            borderTopRightRadius: blob?.w ? "0px" : "0px",
                            borderTopLeftRadius: blob?.w ? "0px" : "0px",
                            borderBottomLeftRadius: blob?.w
                              ? options?.rounded
                              : options?.rounded,
                            borderBottomRightRadius: blob?.w
                              ? options?.rounded
                              : options?.rounded,
                          }
                        : {
                            borderRadius: blob?.w
                              ? options?.rounded
                              : options?.rounded,
                          }),
                    }}
                    className={`relative z-10s transition-all duration-200 ease-in-out object-cover ${
                      options?.shadow
                    }  ${getImageRadius()} ${
                      options?.browserBar == "hidden" ? "" : "rounded-t-none"
                    }`}
                    onLoad={(e) => {
                      setBlob({
                        ...blob,
                        w: e.target.naturalWidth,
                        h: e.target.naturalHeight,
                      });
                    }}
                  />
                </div>
                {isWatermark && (
                  <div className="md:text-[12px] text-[10px] text-white absolute bottom-[4px]">
                    <p className="drop-shadow-lg">Created by shotune.com</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <label
                className="flex flex-col items-center justify-center text-lg opacity-30 select-none max-w-[550px] max-lg:mx-3 rounded-2xl p-10 text-center dark:text-white cursor-pointer border-2 border-dashed border-gray-400 hover:opacity-50 duration-300"
                htmlFor="imagesUpload"
              >
                <input
                  className="hidden"
                  id="imagesUpload"
                  type="file"
                  onChange={onPaste}
                />
                <span className="w-6 h-6 mb-2">
                  <FaPaste />
                </span>
                <p>Paste your screenshot(Cmd/Ctrl+V)</p>
                <p>or drag and drop your screenshot here</p>
                <p>or click here to add one</p>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
