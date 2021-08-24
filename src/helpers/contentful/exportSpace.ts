/* eslint-disable global-require */
import config from '../../config';

export const exportSpace = (): unknown => {
  // TODO: import once @types is available for `contentful-export`
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const contentfulExport = require('contentful-export');

  const options = {
    spaceId: config.spaceId,
    environmentId: config.environmentId,
    managementToken: config.managementToken,
    contentFile: config.contentFile,
    exportDir: config.exportDir,
    useVerboseRenderer: false,
    saveFile: true,
  };

  return contentfulExport(options);
};
