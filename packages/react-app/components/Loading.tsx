//@ts-ignore
import { M3terHead } from "m3ters";

export default function Loading() {

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="hithere">
        <M3terHead seed="load" />
      </div>
    </div>
  )
}