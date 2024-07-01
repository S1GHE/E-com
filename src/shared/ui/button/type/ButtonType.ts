import {ReactNode} from "react";

export interface IButton {
  children: ReactNode;
  variant?: 'text' | 'outline' | 'black';
  to?: string;
  onClick?: () => void;
}