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

export const cardHeaderText: React.CSSProperties = {
    marginLeft: '0.5em'
}

export const cardTextContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '0.5em',
  color: 'white',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  minHeight: '100%',
};

export const cardFooterStyle: React.CSSProperties = {
  bottom: 0,
  left: 0,
  padding: '0.5em',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  position: 'absolute',
};

export const cardFooterActionsStyle: React.CSSProperties = {
  bottom: 0,
  right: 0,
  padding: '0.5em',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'absolute',
};

export const cardContentPaddingStyle: React.CSSProperties = {
  paddingBottom: 16,
};
