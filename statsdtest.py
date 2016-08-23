#!/usr/bin/python
import random
import time
import statsd

ctr_name = 'attach.host'
while True:
  client = statsd.StatsClient('localhost', 8125)
  rand = random.randrange(1, 250)
  print('count: (%d)' % rand)
  if rand > 0:
    client.incr(ctr_name, rand)
  time.sleep(1)
