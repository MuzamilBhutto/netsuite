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
             * Step 4 for this Suitelet: Load the template from File Cabinets using file intewritrnal id4
             * Step 5 for this SuiteLet: Create the Renderer
             * Step 6 for this SuiteLet: Set the Template for the Renderer
             * Step 7 for this SuiteLet: Create custom data
             * Step 8 for this SuiteLet: Set the Custom Data Source and Data name in the template
             * Step 9 for this SuiteLet: Set the Template Type for the Renderer
             * Step 10 for this SuiteLet: Either write rendered contents in response or e in File Cabinet
             *
             */

            // 1. add try & catch
            try {

                // 2. create reference for request & response

                let request  = scriptContext.request  ;
                let response = scriptContext.response ;

                // 3. request method check

                if(request.method === 'GET')
                {
                    // 4. load template from file cabinet using internal ID

                    let template_file = file.load({
                        id :2329589
                    });

                    // 5. create renderer

                    let renderer = render.create();

                    // 6. set template for renderer

                    renderer.templateContent = template_file.getContents();

                    // 7. load the record

                    let person = {
                        name : 'Muzamil',
                        lastName : 'Yasin',
                        phone : 123123,
                        address : {
                            city : 'Hyderabad',
                            state : 'Sindh',
                            country : 'Pakistan'
                        }
                    };

                    // 8. Set Record and Record name in the template

                    renderer.addCustomDataSource({
                        format: render.DataSource.JSON,
                        data : JSON.stringify(person),
                        alias : 'person'
                    });

                    // 9. set template type for renderer

                    let template_pdf = renderer.renderAsPdf();

                    // 10. write rendered contents in response

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
                });
            };

        };

        return {onRequest}

    });
