# Moderation System

The moderation system provides content filtering for the Emotional Vent Space application.

## Features

- **Self-Harm Detection**: Detects phrases related to self-harm and suicide
- **Aggressive Content**: Flags excessive capitalization (yelling)
- **Profanity Filtering**: Customizable word lists
- **Category Tracking**: Categorizes blocked content for analytics

## Detection Categories

1. **self-harm**: Detects suicide-related phrases
2. **aggressive**: Flags yelling/excessive caps
3. **profanity**: Blocks inappropriate language

## How It Works

The moderation check runs automatically on:
- Creating new vents (POST /api/vents)
- Updating existing vents (PUT /api/vents/:id)

Blocked content returns a 400 error with:
```json
{
  "message": "Content blocked: harmful content detected",
  "reason": "harmful content detected",
  "category": "self-harm",
  "blocked": true
}
```

## Configuration

Edit `server/utils/moderation.js` to:
- Add profane words to the `profaneWords` array
- Add harmful patterns to the `harmfulPatterns` array
- Adjust the capitalization threshold
- Configure warning system (currently unused but available)

## Future Enhancements

- Machine learning sentiment analysis
- Integration with external moderation APIs
- Admin panel for custom rules
- User reporting system
- Context-aware filtering
- Language-specific filters

## Testing

Run manual tests:
```bash
node -e "const { checkForHarmfulContent } = require('./server/utils/moderation'); console.log(checkForHarmfulContent('your test message'));"
```

