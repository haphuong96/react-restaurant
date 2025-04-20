import { Icon } from "./Icon";
import { IconName } from "./icon-list";

const icons: IconName[] = [
  "slider-chevron-left",
  "slider-chevron-right",
  "menu-bag",
  "menu-favorite",
  "menu-phone",
  "menu-user",
  "menu-language",
  "product-rating",
  "menu-bar",
];

export default {
  title: "Commons/components/Icon",
  component: Icon,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: { disable: false },
  },
};

export const AllIcons = () => (
  <div
    style={{
      display: "flex",
      gap: 24,
      flexWrap: "wrap",
      alignItems: "center",
    }}
  >
    {icons.map((icon) => (
      <div
        key={icon}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Icon name={icon} width={32} height={32} />
        <span style={{ fontSize: 12, marginTop: 4 }}>{icon}</span>
      </div>
    ))}
  </div>
);
