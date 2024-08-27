export type ActionIconClickType =
  | "snapshot"
  | "record"
  | "draw"
  | "expand"
  | "minimize";

export interface ActionIconsProps {
  isRecording?: boolean;
  isDrawing?: boolean;
  isExpanded?: boolean;
  handleClick: (type: ActionIconClickType) => void;
}
