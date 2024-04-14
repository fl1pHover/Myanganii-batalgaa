import { headers } from "next/headers";
import Link from "next/link";

export const AdminSideBar = () => {
  const admin = "/admin/";
  const header = headers();
  const url = header.get("next-url");

  return (
    <div className="my-4 mr-4 ">
      <Link href={`${admin}`} className="">
        <p
          className={`mt-2 py-1 mx-3 border-b-2 ${
            url == "/admin" ? "border-green-500" : "border-gray-500"
          } border-solid ${url != "/admin" ? "hover:border-sky-500" : ""}`}
        >
          Үндсэн
        </p>
      </Link>
      <Link href={`${admin}register`}>
        <p
          className={`mt-2 py-1 mx-3 border-b-2 ${
            url?.includes("/register") ? "border-green-500" : "border-gray-500"
          } border-solid ${
            !url?.includes("/register") ? "hover:border-sky-500" : ""
          } `}
        >
          Админ нэмэх
        </p>
      </Link>
      {/* <Link href={`${admin}register`}>
      <p>Шинээр админ нэмэх</p>
    </Link> */}
    </div>
  );
};
