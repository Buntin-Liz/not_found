#!/usr/bin/env -S python3
import json


def parse(line):
  if line == "":
    return
  sep = line.split('=')
  if len(sep) != 2:
    return
  return [sep[0], sep[1].replace('"', '').replace("'", '')]

# store in dict and save as json


result = {}

os_info = open("/etc/os-release", "r")
for line in os_info:
  line = line.strip()
  parsed = parse(line)
  if parsed is None:
    continue
  result[parsed[0]] = parsed[1]
os_info.close()

with open('SYSTEM_INFO.json', 'w') as outfile:
  json.dump(result, outfile, indent=4)
