const FIGMA_WINDOW_WIDTH = 1440;
const FIGMA_WINDOW_HEIGHT = 1024;
const FIGMA_FONT = 20;

export default function WidthPercentage(width: number) {
  const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;
  return `${percentage}vw`;
}

export function HeightPercentage(height: number) {
  const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;
  return `${percentage}vh`;
}

export function FontPercentage(size: number) {
  const percentage = size / FIGMA_FONT;

  return `${percentage}em`;
}
