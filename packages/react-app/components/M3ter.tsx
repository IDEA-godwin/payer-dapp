
// @ts-ignore
import { M3terHead } from "m3ters";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function M3ter({ seed, isLoading, handleClick }: { seed: number, isLoading: boolean, handleClick: (id: any) => void }) {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isLoading) setLoading(isLoading)
  }, [isLoading])

  const handleEvent = () => {
    if (isLoading)
      return
    setLoading(true)
    handleClick(seed)
  }

  return (
    <div
      onClick={handleEvent}
      className="text-white bg-[#221F1F] rounded-md hover:outline hover:outline-blue-700"
    >
      <div className="flex items-center justify-between">
        <p className="px-4 pt-3">M3ter ID: <span> {seed}</span></p>
        {
          loading && <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
        }
      </div>
      <M3terHead seed={seed} size={200} />
      {/* <M3terAlias seed={seed} /> */}
    </div>
  )
}