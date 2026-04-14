type SubIntroPartProps = {
  title: string;
  text1: string;
  text2: string;
};

const SubIntroPart = ({ title, text1, text2 }: SubIntroPartProps) => {
  return (
    <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
      <h6 className="text-[14px] md:text-[16px]">
        {' '}
        <span className="text-gradient-yp">[</span> {title}{' '}
        <span className="text-gradient-yp">]</span>
      </h6>
      <div className="mt-2 text-gradient-yp">
        <h1 className="text-[32px] md:text-[40px] lg:text-[50px] font-700">
          {text1}
        </h1>
        <h1 className="text-[32px] md:text-[40px] lg:text-[50px] font-700">
          {text2}
        </h1>
      </div>
    </div>
  );
};

export default SubIntroPart;
