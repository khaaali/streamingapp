# working multicast code wrt to java 
import socket
import struct

UDP_IP = "233.4.5.6"
UDP_PORT = 5678

sock = socket.socket(socket.AF_INET, # Internet
                     socket.SOCK_DGRAM) # UDP
sock.bind((UDP_IP, UDP_PORT))
print "received message:"

while True:
    data, addr = sock.recvfrom(1024) # buffer size is 1024 bytes
    print "received message:", data