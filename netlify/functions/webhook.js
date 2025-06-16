exports.handler = async (event, context) => {
    try {
        // Parse incoming JSON payload
        const body = JSON.parse(event.body);

        // Log the webhook payload for debugging
        console.log('Webhook received! Payload:', body);

        // Example: Process the webhook payload
        if (body.sys?.type === 'Entry') {
            console.log(`Entry ID: ${body.sys.id}, Type: ${body.sys.type}`);
        }

        // Respond with success
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Webhook received successfully!' }),
        };
    } catch (error) {
        console.error('Error processing webhook:', error);

        // Respond with an error
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Webhook processing failed!' }),
        };
    }
};