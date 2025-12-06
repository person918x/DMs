'''
Parse raw messages into CSV of messages grouped by timestamp
'''
import json
import re

HEADERS = ['time', 'message']
TIMESTAMP_PATTERN = r'(\[\w+ \d+:\d+ \w+\])'

if __name__ == '__main__':
  message_groups = []
  output = {}
  with open('raw.txt', 'r', encoding='utf-8') as f:
    content = f.read()
    message_groups = re.split(TIMESTAMP_PATTERN, content)

  msg_group = []
  for text in message_groups:
    if re.match(TIMESTAMP_PATTERN, text):
      output[text] = msg_group
      msg_group = []
    else:
      messages = text.split('\n\t')
      for msg in messages:
        if len(msg.split()):
          msg_group.append(msg.strip())
  # epilogue
  output['EPILOGUE'] = msg_group

  print(json.dumps(output, indent=2))