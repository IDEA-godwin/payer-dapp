function RechargeList({ visibleHistory }) {
  return (
    <div className="space-y-4">
      {visibleHistory.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 rounded-xl"
        >
          {/* Left side: Image + Text */}
          <div className="flex items-center gap-1">
            <img
              src="/robot.png"
              alt="Meter Recharge"
              className="w-10 h-auto object-contain"
            />
            <div>
              <h2 className="text-md font-semibold">Meter Recharge</h2>
              <p className="font-light text-gray-500">
                {item.date}, {item.time}
              </p>
            </div>
          </div>

          {/* Right side: Amount + Status */}
          <div className="text-right">
            <p>{item.amount}</p>
            <p
              className={`text-sm ${
                item.status === "Successful"
                  ? "text-green-500"
                  : item.status === "Pending"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RechargeList;
