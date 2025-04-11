import { Eye, EyeClosedIcon } from "lucide-react";
import RechargeList from "../sub-components/RechargeList";
import { useState, useEffect } from "react";

const rechargeHistory = [
  {
    date: "2023-10-01",
    time: "10:00 AM",
    amount: "$50.00",
    status: "Successful",
  },
  {
    date: "2023-10-02",
    time: "03:15 PM",
    amount: "$30.00",
    status: "Pending",
  },
  {
    date: "2023-10-03",
    time: "08:45 AM",
    amount: "$20.00",
    status: "Failed",
  },
  {
    date: "2023-10-04",
    time: "01:30 PM",
    amount: "$40.00",
    status: "Successful",
  },
  {
    date: "2023-10-05",
    time: "05:00 PM",
    amount: "$15.00",
    status: "Successful",
  },
  {
    date: "2023-10-06",
    time: "11:20 AM",
    amount: "$25.00",
    status: "Pending",
  },
  {
    date: "2023-10-07",
    time: "09:00 AM",
    amount: "$60.00",
    status: "Successful",
  },
  {
    date: "2023-10-08",
    time: "07:45 PM",
    amount: "$35.00",
    status: "Failed",
  },
  {
    date: "2023-10-09",
    time: "12:30 PM",
    amount: "$45.00",
    status: "Successful",
  },
  {
    date: "2023-10-10",
    time: "06:15 PM",
    amount: "$55.00",
    status: "Pending",
  },
  {
    date: "2023-10-11",
    time: "02:10 PM",
    amount: "$70.00",
    status: "Successful",
  },
];

const HomeTab = ({ toggleRechargeMeter }: { toggleRechargeMeter: any }) => {
  const [visibleHistory, setVisibleHistory] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [balances, setBalances] = useState<Array<any>>([]);

  // Simulate an API call to fetch Recharge History
  useEffect(() => {
    setTimeout(() => {
      const fetchedRechargeHistory = [
        {
          date: "2023-10-01",
          time: "10:00 AM",
          amount: "$50.00",
          status: "Successful",
        },
        {
          date: "2023-10-02",
          time: "03:15 PM",
          amount: "$30.00",
          status: "Pending",
        },
        {
          date: "2023-10-03",
          time: "08:45 AM",
          amount: "$20.00",
          status: "Failed",
        },
        {
          date: "2023-10-04",
          time: "01:30 PM",
          amount: "$40.00",
          status: "Successful",
        },
        {
          date: "2023-10-05",
          time: "05:00 PM",
          amount: "$15.00",
          status: "Successful",
        },
        {
          date: "2023-10-06",
          time: "11:20 AM",
          amount: "$25.00",
          status: "Pending",
        },
        {
          date: "2023-10-07",
          time: "09:00 AM",
          amount: "$60.00",
          status: "Successful",
        },
        {
          date: "2023-10-08",
          time: "07:45 PM",
          amount: "$35.00",
          status: "Failed",
        },
        {
          date: "2023-10-09",
          time: "12:30 PM",
          amount: "$45.00",
          status: "Successful",
        },
        {
          date: "2023-10-10",
          time: "06:15 PM",
          amount: "$55.00",
          status: "Pending",
        },
        {
          date: "2023-10-11",
          time: "02:10 PM",
          amount: "$70.00",
          status: "Successful",
        },
      ];

      setVisibleHistory(fetchedRechargeHistory);
      setIsLoading(false); // Set loading to false after data is fetched
    }, 1000); // Simulate 1 second delay for the API call
  }, []);

  const fetchedRechargeHistory = showAll
    ? rechargeHistory
    : rechargeHistory.slice(0, 4);

  // Simulated API call for balances
  // This is where you would fetch the actual data from  API
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBalances([
        { title: "Wallet Balance", amount: "$50.00" },
        { title: "Meter Balance", amount: "120.00" },
        { title: "Energy Balance", amount: "75.00 kWh" },
      ]);
      setLoading(false);
    }, 1000); // 1 second delay
  }, []);

  return (
    <>
      {/* Balance Section */}
      <div className="bg-[#A53C0F] px-3 py-2 rounded-xl flex flex-col text-white min-h-[160px]">
        {loading ? (
          <div className="bg-[#A53C0F] px-3 py-2 rounded-xl animate-pulse">
            {/* Wallet Balance Section */}
            <div className="flex justify-between items-center mb-5">
              <div className="text-left space-y-1">
                <div className="h-4 bg-white/30 rounded w-24"></div>{" "}
                {/* title */}
                <div className="h-6 bg-white/30 rounded w-36"></div>{" "}
                {/* amount */}
              </div>
              <div className="w-6 h-6 bg-white/30 rounded-full"></div>{" "}
              {/* eye icon placeholder */}
            </div>

            {/* Meter + Energy Balance Section */}
            <div className="flex justify-between items-center mt-5">
              <div className="space-y-1">
                <div className="h-4 bg-white/30 rounded w-20"></div>{" "}
                {/* title */}
                <div className="h-5 bg-white/30 rounded w-24"></div>{" "}
                {/* amount */}
              </div>
              <div className="space-y-1">
                <div className="h-4 bg-white/30 rounded w-20"></div>{" "}
                {/* title */}
                <div className="h-5 bg-white/30 rounded w-24"></div>{" "}
                {/* amount */}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Top section */}
            <div className="flex justify-between items-center mb-5">
              <div className="text-left -space-y-1">
                <p className="font-light">{balances[0].title}</p>
                <p className="text-2xl">
                  {isHidden ? "****" : balances[0].amount}
                </p>
              </div>
              <span
                className="cursor-pointer"
                onClick={() => setIsHidden(!isHidden)}
              >
                {isHidden ? <EyeClosedIcon /> : <Eye />}
              </span>
            </div>

            {/* Bottom section */}
            <div className="flex justify-between items-center mt-5">
              {/* <div>
                <p className="font-light">{balances[1].title}</p>
                <p className="text-xl">
                  {isHidden ? "****" : balances[1].amount}
                </p>
              </div> */}
              <div>
                <p className="font-light">{balances[2].title}</p>
                <p className="text-xl">
                  {isHidden ? "****" : balances[2].amount}
                </p>
              </div>
              <button
                className="w-full py-6 cursor-pointer text-white bg-black border-[#123A77] border-[1px] rounded-xl flex flex-col items-center justify-between"
                onClick={toggleRechargeMeter}
              >
                <img src="images/recharge.png" alt="recharge" />
                <p>Recharge Meter</p>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Recharge Meter Button */}
      {/* <div className="w-full mt-10">

      </div> */}

      {/* Recent Transactions */}
      <div className="w-full mt-6">
        <div className="flex justify-between font-light items-center pb-3 mb-2 border-b-[1px]">
          <h2>Recent Transactions</h2>
          <p onClick={() => setShowAll(!showAll)} className="cursor-pointer">
            {showAll ? "See Less" : "See All"}
          </p>
        </div>
        {isLoading ? (
          <RechargeListLoading />
        ) : (
          <RechargeList visibleHistory={fetchedRechargeHistory} />
        )}
      </div>
    </>
  );
};

function RechargeListLoading() {
  return (
    <div className="space-y-4">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 rounded-xl animate-pulse bg-white/5"
        >
          {/* Left side: Image + Text */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded-full" />{" "}
            {/* image placeholder */}
            <div className="space-y-1">
              <div className="h-4 bg-white/20 rounded w-28" /> {/* title */}
              <div className="h-3 bg-white/20 rounded w-24" />{" "}
              {/* date + time */}
            </div>
          </div>

          {/* Right side: Amount + Status */}
          <div className="text-right space-y-1">
            <div className="h-4 bg-white/20 rounded w-16 ml-auto" />{" "}
            {/* amount */}
            <div className="h-3 bg-white/20 rounded w-14 ml-auto" />{" "}
            {/* status */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeTab;
