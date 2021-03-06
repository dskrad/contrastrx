# Copyright 2012 Digital Inspiration
# http://www.labnol.org/

import os
from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext.webapp import template

class MainHandler(webapp.RequestHandler):
  def get (self, q):
    if q is None:
      q = 'index.html'

    path = os.path.join (os.path.dirname (__file__), q)
    self.response.headers ['Content-Type'] = 'text/html'
    self.response.out.write (template.render (path, {}))

class CacheManifest(webapp.RequestHandler):
  def get(self):
    self.response.headers['Content-Type'] = 'text/cache-manifest'
    self.response.out.write(template.render (path, {}))

def main ():
  application = webapp.WSGIApplication ([('/(.*html)?', MainHandler),
                                         ('/index.manifest', CacheManifest)], debug=True)
  util.run_wsgi_app (application)

if __name__ == '__main__':
  main ()
