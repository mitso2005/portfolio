export const submitToGoogleSheets = async (email, topic, message) => {
    const sheetUrl = process.env.REACT_APP_GOOGLE_SHEET_URL;
    
    try {
        await fetch(sheetUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                topic,
                message,
                timestamp: new Date().toISOString(),
            }),
        });
        return true;
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        return false;
    }
};
