import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const ButtonPage = () => {
  return (
    <>
      <div className="flex justify-center m-3">
        <Button className="flex flex-col h-full" variant="exampleIndigo">
          <div className="mb-2">
            <Video size={20} />
          </div>

          <div>Button 1</div>
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;
