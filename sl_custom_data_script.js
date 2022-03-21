/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/file', 'N/record', 'N/render'],
    /**
 * @param{file} file
 * @param{record} record
 * @param{render} render
 */
    (file, record, render) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {

            try {

                // 2. create reference for request & response

                let request  = scriptContext.request  ;
                let response = scriptContext.response ;

                // 3. request method check

                if(request.method === 'GET')
                {
                    // 4. load template from file cabinet using internal ID

                    let template_file = file.load({
                        id :2329384
                    });

                    // 5. create renderer

                    let renderer = render.create();

                    // 6. set template for renderer

                    renderer.templateContent = template_file.getContents();

                    // 7. load the record

                    let person ;
                    let persons = [] ;

                    person = {
                        name : 'Muzamil',
                        lastName : 'Yasin',
                        phone : '0333123456',
                        address : {
                            city : 'Hyderabad',
                            state : 'Sindh',
                            country : 'Pakistan'
                        }

                    };

                    persons.push(person);

                    person = {
                        name : 'Talha',
                        lastName : 'Ahmed',
                        phone : '0333123456',
                        address : {
                            city : 'Lahore',
                            state : 'Punjab',
                            country : 'Pakistan'
                        }
                    } ;
                    persons.push(person);

                    person = {
                        name : 'Ahmed',
                        lastName : 'Talha',
                        phone : '0333123456',
                        address : {
                            city : 'Karachi',
                            state : 'Sindh',
                            country : 'Country'
                        }
                    };
                    persons.push(person);

                    let data = {
                        persons : persons
                    }









                    // 8. Set Record and Record name in the template

                    renderer.addCustomDataSource({
                        format: render.DataSource.JSON,
                        data : JSON.stringify(data),
                        alias : 'data'
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

        }



        return {onRequest}

    });
