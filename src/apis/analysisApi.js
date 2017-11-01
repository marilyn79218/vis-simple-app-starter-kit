import qs from 'qs';

import fetchUtil from '../shared/utils/fetchUtil';

const endpoint = '/cms/webapi/analysis/v1';

export const getAnalysisFromModel = (modelId, hashId) => {
  const qsObject = {
    video_id_list_key: hashId,
  };

  return fetchUtil(`${endpoint}/models/${modelId}?${qs.stringify(qsObject)}`)
    .get();
}

