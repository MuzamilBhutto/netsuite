/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/ui/serverWidget'],
    /**
 * @param{serverWidget} serverWidget
 */
    (serverWidget) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) =>
        {
            let request  = scriptContext.request  ;
            let response = scriptContext.response ;

            try
            {
                if(request.method === 'GET')
                {
                    let form = serverWidget.createForm({
                        title : 'Suitelet',
                        hideNavBar : false
                    });

                    let name_field = form.addField({
                        label : 'Name:',
                        type  : serverWidget.FieldType.TEXT,
                        id    : 'custpage_name_field'
                    });
                    name_field.isMandatory = true ;

                    let gender_field = form.addField({
                        label : 'Gender:',
                        type : serverWidget.FieldType.SELECT,
                        id : 'custpage_gender_field'
                    });

                    let supervisor_field = form.addField({
                        label : 'Supervisor:',
                        type : serverWidget.FieldType.SELECT,
                        id : 'custpage_supervisor_field',
                        source : 'employee'
                    });

                    gender_field.addSelectOption({
                        text : 'Male',
                        value: 'male',
                        isSelected : true
                    });

                    gender_field.addSelectOption({
                        text : 'Female',
                        value: 'female'
                    });

                    gender_field.isMandatory = true;


                   let age_field = form.addField({
                        label : 'Age:',
                        type : serverWidget.FieldType.INTEGER,
                        id : 'custpage_age_field'
                    });

                   age_field.isMandatory = true ;

                   let date_of_birth_field = form.addField({
                        label : 'Date of Birth:',
                        type : serverWidget.FieldType.DATE,
                        id : 'custpage_date_field'
                    });

                   date_of_birth_field.isMandatory = true ;

                   let address_field = form.addField({
                       label: 'Address',
                       type : serverWidget.FieldType.TEXTAREA,
                       id : 'custpage_address_field'
                   });

                   address_field.isMandatory = true ;

                   let gaming_field = form.addField({
                       label : 'Gaming',
                       type : serverWidget.FieldType.CHECKBOX,
                       id : 'custpage_gaming_field'
                   });

                   gaming_field.isMandatory = true ;

                   let reading_field = form.addField({
                       label : 'Reading',
                       type : serverWidget.FieldType.CHECKBOX,
                       id : 'custpage_reading_field'
                   });

                   let movies_field = form.addField({
                       label : 'Movies',
                       type : serverWidget.FieldType.CHECKBOX,
                       id : 'custpage_movies_field'
                   });


                   let image_field = form.addField({
                       label : 'Image',
                       type : serverWidget.FieldType.IMAGE,
                       id : 'custpage_image_field'
                   });

                   let currency_field = form.addField({
                       label : 'Currency ($)',
                       type : serverWidget.FieldType.CURRENCY,
                       id : 'custpage_currency_field'
                   });

                   currency_field.isMandatory = true ;

                   let file_field = form.addField({
                       label : 'File',
                       type : serverWidget.FieldType.FILE,
                       id : 'custpage_radio_file'
                   });


                   let status_field = form.addField({
                        label : 'status:',
                        type : serverWidget.FieldType.SELECT,
                        id : 'custpage_status_field'
                    });

                   status_field.addSelectOption({
                       text : 'Single',
                       value : 'Single',
                       isSelected : true
                   })

                    status_field.addSelectOption({
                        text : 'Married',
                        value : 'Married',
                    })

                    status_field.isMandatory = true ;

                   let city_field = form.addField({
                        label : 'City:',
                        type : serverWidget.FieldType.TEXT,
                        id : 'custpage_city_field'
                    });

                   city_field.isMandatory = true ;


                    form.addSubmitButton({
                        label : 'Save'
                    });

                    form.addResetButton({
                        label : 'Reset'
                    });

                    response.writePage({
                        pageObject : form
                    });

                    /*

                    response.writeLine({
                        output : 'Hello World'
                    });

                    response.writeLine({
                        output : 'Hello'
                    });

                    response.writeLine({
                        output : 'Hello World'
                    });

                    */
                }
                else if(request.method === 'POST')
                {
                    let name = request.parameters['custpage_name_field'];
                    response.writeLine(name);

                    let age = request.parameters['custpage_age_field'];
                    response.writeLine(age);

                    let gender_value = request.parameters['custpage_gender_field'];
                    response.writeLine(gender_value);

                    let gender_text = request.parameters['inpt_custpage_gender_field'];
                    response.writeLine(gender_text);

                    let status_value = request.parameters['custpage_status_field'];
                    response.writeLine(status_value);

                    let status_text = request.parameters['custpage_status_field'];
                    response.writeLine(status_text);

                    let city_value = request.parameters['custpage_city_field'];
                    response.writeLine(city_value);

                    let city_text = request.parameters['custpage_city_field'];
                    response.writeLine(city_text) ;

                    let currency_value = request.parameters['custpage_currency_field'];
                    response.writeLine(currency_value);

                    let currency_text = request.parameters['custpage_currency_field'];
                    response.writeLine(currency_text);

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
