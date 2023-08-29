import { Button } from "@/components/ui/button";
import { Video, AlertTriangle, Info } from "lucide-react";

const buttonStyle = "flex flex-col h-full";

const ButtonPage = () => {
  return (
    <>
      <div className="flex justify-center gap-2 m-3">
        {/* 남색 버튼 */}
        <Button variant="exampleIndigo" className="flex flex-col h-full">
          <div className="mb-2">
            <Video size={20} />
          </div>
          <div>Button 1</div>
        </Button>

        {/* 빨간 버튼 */}
        <Button variant="destructive" className="insu-button">
          <AlertTriangle size={20} className="mb-2" />
          Button 2
        </Button>

        {/* 테두리만 있는 버튼 */}
        <Button variant="outline" className={buttonStyle}>
          <Info size={20} className="mb-2" />
          Button 3
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;
