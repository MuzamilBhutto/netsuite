/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/file', 'N/record', 'N/render', 'N/ui/serverWidget'],
    /**
     *
     * @param{file} file
     * @param{record} record
     * @param{render} render
     * @param{serverWidget} serverWidget
     *
     */
    (file, record, render, serverWidget) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) =>
        {
            try
            {
                let request     = scriptContext.request     ;
                let response    = scriptContext.response    ;

                if(request.method === 'GET')
                {
                    let order_id = request.parameters.order_id;

                    let xml_template_file = file.load({
                        id : 2328675
                    });

                    let renderer = render.create();
                    renderer.templateContent = xml_template_file.getContents();

                    renderer.addRecord({
                         record : record.load({
                             type : record.Type.SALES_ORDER,
                             id   : parseInt(order_id)
                         }),
                        templateName : 'record'
                    });

                    let ticket_slip = renderer.renderAsPdf();

                    response.writeFile({
                        file     : ticket_slip,
                        isInline : true
                    });
                }
                else
                {

                }
            }
            catch (e) {
                log.error({title: '::Error::', details: e});
            }

        }

        return {onRequest}

    });
