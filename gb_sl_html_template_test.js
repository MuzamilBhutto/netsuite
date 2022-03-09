/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/file','N/record', 'N/render', 'N/search'],
    /**
 * @param{file} file
 * @param{record} record
 * @param{render} render
 * @param{search} search
 */
    (file, record, render, search) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            /**
             * Step 1 for Each Script: Add Try Catch and then add the log.error in catch
             * Step 2 for each SuiteLet: Create references for the request and response
             * Step 3 for each Suitelet: Add the Request Method Check
             * Step 4 for this Suitelet: Load the template from File Cabinets using file internal id4
             * Step 5 for this SuiteLet: Create the Renderer
             * Step 6 for this SuiteLet: Set the Template for the Renderer
             * Step 7 for this SuiteLet: Load the record
             * Step 8 for this SuiteLet: Set the Record and Record name in the template
             * Step 9 for this SuiteLet: Set the Template Type for the Renderer
             * Step 10 for this SuiteLet: Either write rendered contents in response or write in File Cabinet
             *
             */

            try {

                let request  = scriptContext.request  ;
                let response = scriptContext.response ;

                if(request.method === 'GET')
                {

                    let template_file = file.load({
                        id : 2329279
                    });

                    let renderer = render.create();
                    renderer.templateContent = template_file.getContents();
                    let customer = record.load({
                        id : 262738,
                        type : record.Type.CUSTOMER,
                        isDynamic : true
                    });

                    renderer.addRecord({
                        record : customer,
                        templateName: 'customer'
                    });

                    let template_pdf = renderer.renderAsPdf();
                    36


                    response.writeFile({
                        file : template_pdf,
                        isInline: true
                    });

                }
                else if(request.method === 'POST')
                {

                }


            }
            catch (e) {
                log.error({
                    title: 'Error',
                    details: e
                })
            }

        }

        return {onRequest}

    });
