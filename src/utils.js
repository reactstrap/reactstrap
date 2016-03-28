export function getTetherAttachments(placement) {
  let attachments = {};
  switch (placement) {
    case 'top':
    case 'top center':
      attachments = {
        attachment: 'bottom center',
        targetAttachment: 'top center'
      };
      break;
    case 'bottom':
    case 'bottom center':
      attachments = {
        attachment: 'top center',
        targetAttachment: 'bottom center'
      };
      break;
    case 'left':
    case 'left center':
      attachments = {
        attachment: 'middle right',
        targetAttachment: 'middle left'
      };
      break;
    case 'right':
    case 'right center':
      attachments = {
        attachment: 'middle left',
        targetAttachment: 'middle right'
      };
      break;
    case 'top left':
      attachments = {
        attachment: 'bottom left',
        targetAttachment: 'top left'
      };
      break;
    case 'top right':
      attachments = {
        attachment: 'bottom right',
        targetAttachment: 'top right'
      };
      break;
    case 'bottom left':
      attachments = {
        attachment: 'top left',
        targetAttachment: 'bottom left'
      };
      break;
    case 'bottom right':
      attachments = {
        attachment: 'top right',
        targetAttachment: 'bottom right'
      };
      break;
    case 'right top':
      attachments = {
        attachment: 'top left',
        targetAttachment: 'top right'
      };
      break;
    case 'right bottom':
      attachments = {
        attachment: 'bottom left',
        targetAttachment: 'bottom right'
      };
      break;
    case 'left top':
      attachments = {
        attachment: 'top right',
        targetAttachment: 'top left'
      };
      break;
    case 'left bottom':
      attachments = {
        attachment: 'bottom right',
        targetAttachment: 'bottom left'
      };
      break;
    default:
      attachments = {
        attachment: 'top center',
        targetAttachment: 'bottom center'
      };
  }

  return attachments;
}

export const tetherAttachements = [
  'top',
  'bottom',
  'left',
  'right',
  'top left',
  'top center',
  'top right',
  'right top',
  'right middle',
  'right bottom',
  'bottom right',
  'bottom center',
  'bottom left',
  'left top',
  'left middle',
  'left bottom'
];
