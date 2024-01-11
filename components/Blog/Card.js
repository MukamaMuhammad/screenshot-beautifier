import Image from "next/image";
import Link from "next/link";
import hero from "@public/images/hero.png";
import moment from "moment";

function Card(item) {
  return (
    <div className="max-w-full m-2 sm:m-0  shadow-sm bg-gray-800">
      <Image
        className="rounded-lg p-3"
        width={1000}
        height={324}
        src={item.item.image}
        alt=" demo image "
      />

      <div className="p-3">
        <div className="flex mb-3">
          <p className="text-sm  text-gray-400">
            {" "}
            {moment(item.item.created_at).format("MMMM D, YYYY")}{" "}
          </p>
          <p className="text-sm text-gray-400 mx-1"> , </p>
          <p className="text-sm text-gray-400"> 5 min read </p>
        </div>

        <div className="text-lg ">{item.item.title}</div>
      </div>
    </div>
  );
}

export default Card;
