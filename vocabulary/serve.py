#!/usr/bin/env python3
"""
Run this to start the vocabulary quiz app.
Opens http://localhost:8765/quiz.html automatically.
"""
import http.server, socketserver, os, webbrowser, threading, subprocess, sys

PORT = 8765
DIR  = os.path.dirname(os.path.abspath(__file__))

def free_port(port):
    """Kill whatever is using this port, if anything."""
    try:
        result = subprocess.run(
            ["lsof", "-ti", f"tcp:{port}"],
            capture_output=True, text=True
        )
        pids = result.stdout.strip().splitlines()
        for pid in pids:
            subprocess.run(["kill", "-9", pid])
        if pids:
            print(f"   (Stopped previous server on port {port})")
    except Exception:
        pass

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=DIR, **kw)
    def log_message(self, *_):
        pass

free_port(PORT)

def open_browser():
    import time; time.sleep(0.6)
    webbrowser.open(f"http://localhost:{PORT}/quiz.html")

threading.Thread(target=open_browser, daemon=True).start()

print(f"✅  Vocabulary Quiz running at http://localhost:{PORT}/quiz.html")
print("    Press Ctrl+C to stop.\n")

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
