// Start coding here

function Alert({ type }) {
  const classes = {
    error: {
      style: "bg-red-200",
      icon: <box-icon name='sad'></box-icon>,
      message: "This is error alert box",
    },

    warning: {
      style: "bg-orange-200",
      icon: <box-icon name='calendar-exclamation' ></box-icon>,
      message: "This is warning alert box",
    },
    info: {
      style: "bg-green-200",
      icon: <box-icon name='alarm-exclamation' ></box-icon>,
      message: "This is info alert box",
    },
    success: {
      style: "bg-yellow-100",
      icon: <box-icon name='check-circle'></box-icon>,
      message: "This is success alert box",
    },
  };

  const baseStyle =
    "w-[300px] rounded-[4px] p-2 text-xs text-gray-600 font-bold flex items-center gap-2";

  return (
    <>
      <div className={`${classes[type].style} ${baseStyle}`}>
        {classes[type].icon}
        {classes[type].message}
      </div>
    </>
  );
}

export default Alert;
