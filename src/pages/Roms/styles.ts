import { SxProps, Theme } from '@mui/material/styles';

export const getAdjustedPaperStyle = (isSxUp: boolean, isSmUp: boolean): SxProps<Theme> => ({
  py: 0,
  px: 0,
  borderRadius: isSxUp ? 4 : 0,
  mt: 0,
  mb: isSxUp ? 2 : 0,
  mr: isSxUp ? 2 : 0,
  ml: isSxUp ? (isSmUp ? 0 : 2) : 0
});

export const cardsContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'start',
  width: '100%',
};

export const cardStyle: SxProps<Theme> = {
  width: '100%',
  px: 0,
  paddingTop: 0,
  paddingBottom: 0,
  margin: '0.5em',
  height: '100%',
  position: 'relative',
};

export const cardMediaStyle: SxProps<Theme> = {
  height: 0,
  paddingTop: '56.25%',
  borderRadius: 5,
  filter: 'brightness(50%)',
};

export const cardContentStyle: React.CSSProperties = {
  position: 'relative',
};

export const cardTextContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '0.5em',
  color: 'white',
  width: '100%',
  height: '100%',
  margin: 0
};

// Adjust cardHeaderText to naturally flow into the grid without specific positioning
export const cardHeaderText: React.CSSProperties = {
  gridColumn: '1 / 2',
  gridRow: '1 / 2',
  marginLeft: '0.5em',
};

// Adjust cardFooterStyle for the author and version pills, placing them in the bottom left
export const cardFooterStyle: React.CSSProperties = {
  gridColumn: '1 / 2',
  gridRow: '2 / 3',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0.5em'
};

// Adjust cardFooterActionsStyle for the expand button, placing it in the bottom right
export const cardFooterActionsStyle: React.CSSProperties = {
  gridColumn: '2 / 3',
  gridRow: '2 / 3',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0.5em',
};

// The Button and Menu components inside the JSX will naturally flow into their grid positions.
// You might need to adjust their container divs or directly apply grid positioning if they are not aligning as expected.
export const cardContentPaddingStyle: React.CSSProperties = {
  paddingBottom: 16,
};
