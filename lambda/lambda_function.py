import json
import logging

def lambda_handler(event, context):
    
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    
    professional_services = [
                'Custom Email Alerts for Ifbyphone',
                'Custom Call Tracking Reports for Ifbyphone',
                'Custom WEX IVR Integration for Ifbyphone',
                'Custom OrderMotion IVR Integration for Ifbyphone',
                'Custom DispatchTrack Integration for Ifbyphone',
                'Custom Salesforce Integration for Ifbyphone',
                'Custom SugarCRM Integration for Ifbyphone',
                'Custom Zendesk Integration for Ifbyphone',
                'Custom Zoho Integration for Ifbyphone'
            ]
    partnerships = [
                    'Amazon Connect Integration for DialogTech',
                    'Adobe Analytics Integration for DialogTech',
                    'Adobe Media Optimizer Integration for DialogTech',
                    'Adobe Launch Integration for DialogTech',
                    'DoubleClick Integration for DialogTech',
                    'Google Analytics Integration for DialogTech',
                    'Marin Integration for DialogTech',
                    'Yext Integration for DialogTech',
                ]
    microservices = [
                    'Area Service for Neighborhoods.com'
                ]
    
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
                "Linux",
                "Git"
            ],
            'some_experience': [
                'Python',
                'NodeJS',
                'Ruby on Rails',
                'C#',
                'Firebase',
                'PostgreSQL',
                'SASS',
                'Webpack',
                'New Relic',
                'Kibana',
                'Grafana',
                'Jenkins',
                'Kubernetes',
                'Heroku'
            ],
            'projects': {
                'professional_services': professional_services,
                'partnerships': partnerships,
                'microservices': microservices,
                'all_projects': microservices + partnerships + professional_services
            }
        })
    }
