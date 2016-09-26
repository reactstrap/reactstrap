import * as Utils from '../utils';

describe('Utils', () => {
  describe('getTetherAttachments', () => {
    let expectedConfig;

    beforeEach(() => {
      expectedConfig = {
        attachment: '',
        targetAttachment: ''
      };
    });

    it('should return a default config when placement is not matched', () => {
      expectedConfig.attachment = 'top center';
      expectedConfig.targetAttachment = 'bottom center';

      expect(Utils.getTetherAttachments()).toEqual(expectedConfig);
    });

    it('should return config for "top" & "top center"', () => {
      expectedConfig.attachment = 'bottom center';
      expectedConfig.targetAttachment = 'top center';

      expect(Utils.getTetherAttachments('top')).toEqual(expectedConfig);
      expect(Utils.getTetherAttachments('top center')).toEqual(expectedConfig);
    });

    it('should return config for "bottom" & "bottom center"', () => {
      expectedConfig.attachment = 'top center';
      expectedConfig.targetAttachment = 'bottom center';

      expect(Utils.getTetherAttachments('bottom')).toEqual(expectedConfig);
      expect(Utils.getTetherAttachments('bottom center')).toEqual(expectedConfig);
    });

    it('should return config for "left" & "left center"', () => {
      expectedConfig.attachment = 'middle right';
      expectedConfig.targetAttachment = 'middle left';

      expect(Utils.getTetherAttachments('left')).toEqual(expectedConfig);
      expect(Utils.getTetherAttachments('left center')).toEqual(expectedConfig);
    });

    it('should return config for "right" & "right center"', () => {
      expectedConfig.attachment = 'middle left';
      expectedConfig.targetAttachment = 'middle right';

      expect(Utils.getTetherAttachments('right')).toEqual(expectedConfig);
      expect(Utils.getTetherAttachments('right center')).toEqual(expectedConfig);
    });

    it('should return config for "top left"', () => {
      expectedConfig.attachment = 'bottom left';
      expectedConfig.targetAttachment = 'top left';

      expect(Utils.getTetherAttachments('top left')).toEqual(expectedConfig);
    });

    it('should return config for "top left"', () => {
      expectedConfig.attachment = 'bottom left';
      expectedConfig.targetAttachment = 'top left';

      expect(Utils.getTetherAttachments('top left')).toEqual(expectedConfig);
    });

    it('should return config for "top right"', () => {
      expectedConfig.attachment = 'bottom right';
      expectedConfig.targetAttachment = 'top right';

      expect(Utils.getTetherAttachments('top right')).toEqual(expectedConfig);
    });

    it('should return config for "bottom left"', () => {
      expectedConfig.attachment = 'top left';
      expectedConfig.targetAttachment = 'bottom left';

      expect(Utils.getTetherAttachments('bottom left')).toEqual(expectedConfig);
    });

    it('should return config for "bottom right"', () => {
      expectedConfig.attachment = 'top right';
      expectedConfig.targetAttachment = 'bottom right';

      expect(Utils.getTetherAttachments('bottom right')).toEqual(expectedConfig);
    });

    it('should return config for "right top"', () => {
      expectedConfig.attachment = 'top left';
      expectedConfig.targetAttachment = 'top right';

      expect(Utils.getTetherAttachments('right top')).toEqual(expectedConfig);
    });

    it('should return config for "right bottom"', () => {
      expectedConfig.attachment = 'bottom left';
      expectedConfig.targetAttachment = 'bottom right';

      expect(Utils.getTetherAttachments('right bottom')).toEqual(expectedConfig);
    });

    it('should return config for "left top"', () => {
      expectedConfig.attachment = 'top right';
      expectedConfig.targetAttachment = 'top left';

      expect(Utils.getTetherAttachments('left top')).toEqual(expectedConfig);
    });

    it('should return config for "left bottom"', () => {
      expectedConfig.attachment = 'bottom right';
      expectedConfig.targetAttachment = 'bottom left';

      expect(Utils.getTetherAttachments('left bottom')).toEqual(expectedConfig);
    });
  });
});
