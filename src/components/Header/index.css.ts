import { style } from '@vanilla-extract/css';
import { vars } from '@/utils/themes.css';

export const headerClass = style({
  height: '4rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const iconClass = style({
  marginRight: 12,
  color: `${vars.color.icon} !important`,
});
