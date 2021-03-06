﻿import {SuperMap} from '../SuperMap';
import {Util} from '../commontypes/Util';
import {FilterParameter} from './FilterParameter';
import {GetFeaturesParametersBase} from './GetFeaturesParametersBase';

/**
 * @class SuperMap.GetFeaturesByIDsParameters
 * @category  iServer Data FeatureResults
 * @classdesc ID查询参数类。
 * @param {Object} options - 参数。  
 * @param {Array.<number>} options.IDs - 所要查询指定的元素 ID 信息。  
 * @param {Array.<string>} [options.fields] - 设置查询结果返回字段。默认返回所有字段。  
 * @param {Array.<string>} options.dataSetNames - 数据集集合中的数据集名称列表。  
 * @param {boolean} [options.returnContent=true] - 是否直接返回查询结果。  
 * @param {number} [options.fromIndex=0] - 查询结果的最小索引号。  
 * @param {number} [options.toIndex=19] - 查询结果的最大索引号。  
 * @extends {SuperMap.GetFeaturesParametersBase}
 */
export class GetFeaturesByIDsParameters extends GetFeaturesParametersBase {


    constructor(options) {
        super(options);
        /**
         * @member {string} SuperMap.GetFeaturesByIDsParameters.prototype.getFeatureMode
         * @description 数据集查询模式。
         */
        this.getFeatureMode = "ID";

        /**
         * @member {Array.<number>} SuperMap.GetFeaturesByIDsParameters.prototype.IDs
         * @description 所要查询指定的元素 ID 信息。
         */
        this.IDs = null;

        /**
         *  @member {Array.<string>} SuperMap.GetFeaturesByIDsParameters.prototype.fields
         *  @description 设置查询结果返回字段。当指定了返回结果字段后，则 GetFeaturesResult 中的 features 的属性字段只包含所指定的字段。不设置即返回全部字段。
         */
        this.fields = null;
        Util.extend(this, options);

        this.CLASS_NAME = "SuperMap.GetFeaturesByIDsParameters";
    }


    /**
     * @function SuperMap.GetFeaturesByIDsParameters.prototype.destroy
     * @override
     */
    destroy() {
        super.destroy();
        var me = this;
        me.IDs = null;
        me.getFeatureMode = null;
        if (me.fields) {
            while (me.fields.length > 0) {
                me.fields.pop();
            }
            me.fields = null;
        }
    }

    /**
     * @function SuperMap.GetFeaturesByIDsParameters.toJsonParameters
     * @description 将 SuperMap.GetFeaturesByIDsParameters 对象转换为 JSON 字符串。
     * @param {SuperMap.GetFeaturesByIDsParameters} params - ID 查询参数对象。
     * @returns {string} 转化后的 JSON 字符串。
     */
    static toJsonParameters(params) {
        var parasByIDs, filterParameter;

        parasByIDs = {
            datasetNames: params.datasetNames,
            getFeatureMode: "ID",
            ids: params.IDs
        };
        if (params.fields) {
            filterParameter = new FilterParameter();
            filterParameter.name = params.datasetNames;
            filterParameter.fields = params.fields;
            parasByIDs.queryParameter = filterParameter;
        }
        return Util.toJSON(parasByIDs);
    }

}

SuperMap.GetFeaturesByIDsParameters = GetFeaturesByIDsParameters;