import json
import logging

def lambda_handler(event, context):
    
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    
    if "headers" in event:
        logger.info(event["headers"])
        
        if "Origin" in event["headers"]:
            
            logger.info(event["headers"]["Origin"])
            
            if event["headers"]["Origin"] != 'http://www.phpdevelopmentchicago.com' and event["headers"]["Origin"] != '':
            
                return {
                    'statusCode': 500,
                    'body': 'Not a valid Origin'
                }
        else:
    
            return {
                'statusCode': 500,
                'body': 'Not a valid Origin'
            }           
    else:
    
        return {
            'statusCode': 500,
            'body': 'Not a valid Origin'
        }   
        
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'skills': [
                "PHP",
                "HTML 5",
                "CSS",
                "Handlebars",
                "ReactJS",
                "MySQL",
                "Amazon Web Services",
                "Docker",
                "Linux"
            ],
            'some_experience': [
                'Python',
                'NodeJS',
                'Ruby on Rails',
                'C#',
                'Firebase'
            ],
            'projects': {
                'professional_services': [
                    'Custom Email Alerts',
                    'Custom Call Tracking Reports',
                    'Custom WEX IVR Integration',
                    'Custom OrderMotion IVR Integration',
                    'Custom DispatchTrack Integration',
                    'Custom Salesforce Integration',
                    'Custom SugarCRM Integration',
                    'Custom Zendesk Integration',
                    'Custom Zoho Integration'
                ],
                'partnerships': [
                    'Amazon Connect Integration',
                    'Adobe Analytics Integration',
                    'Adobe Media Optimizer Integration',
                    'Adobe Launch Integration',
                    'DoubleClick Integration',
                    'Google Analytics Integration',
                    'Marin Integration',
                    'Yext Integration'
                ]
            }
        })
    }