const Quote = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <div className="  font-bold max-w-lg text-2xl">
          "The customer service I received was exceptional. The support team
          went above and beyond to address my concerns."
        </div>
        <div>
          <h2 className="font-semibold text-lg">Jules Winnfield</h2>
          <p className="text-slate-600">CEO, Acme Inc.,</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
