import json

def lambda_handler(event, context):
    # TODO implement
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'skills': [
                "PHP",
                "ReactJS",
                "MySQL",
                "Amazon Web Services",
                "Docker",
                "Linux"
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
