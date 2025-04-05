import { Button } from "@/commons/components/Button/Button";
import { Icon } from "@/commons/components/Icon/Icon";

export const UserMenu = () => {
  return (
    <div className="absolute top-5 right-0 flex gap-1">
      <Button className="p-2">
        <Icon name="menu-language" />
      </Button>
      <Button className="p-2">
        <Icon name="menu-phone" />
      </Button>
      <Button className="p-2">
        <Icon name="menu-favorite" />
      </Button>
      <Button className="p-2">
        <Icon name="menu-bag" />
      </Button>
      <Button className="p-2">
        <Icon name="menu-user" />
      </Button>
    </div>
  );
};
