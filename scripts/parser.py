'''
Parse raw messages into CSV of messages grouped by timestamp
'''
import json
import re

HEADERS = ['time', 'messages']
TIMESTAMP_PATTERN = r'(\[\w+ \d+:\d+ \w+\])'

if __name__ == '__main__':
  message_groups = []
  output = []
  with open('raw.txt', 'r', encoding='utf-8') as f:
    content = f.read()
    message_groups = re.split(TIMESTAMP_PATTERN, content)

  msg_group = []
  for text in message_groups:
    if re.match(TIMESTAMP_PATTERN, text):
      output.append({ 'time': text, 'messages': msg_group })
      msg_group = []
    else:
      # Consider new paragraphs/lines as individual texts
      # Ignore whitespace only lines leading/trailing whitespace
      messages = text.split('\n')
      for msg in messages:
        if len(msg.split()):
          msg_group.append(msg.strip())
  # Epilogue
  output.append({ 'time': 'Now', 'messages': msg_group })

  with open('../src/assets/messages.json', 'w') as f:
    json.dump(output, f, indent=2)