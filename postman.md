
#greet

POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: a8239af1-d75a-4588-96d6-9343da31f543,c1ce7882-4629-4a6e-9632-88d97bac6e0b
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 100
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[{"intent":"actions.intent.MAIN",
"rawInputs":[{"query":""}]}]

}


#looking for restaurant
POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: 8afc28c1-cb72-4d4f-a12d-3ce3eb042f5d,3752a3d3-b838-47c9-bb31-9c137acceb43
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 202
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[
	{
		"intent":"actions.intent.TEXT",
		"rawInputs":[{"query":"I'm looking for a restaurant within 5000 meters from Center of San Jose","radius":"100 meters"}]
	}]

}


#ask for distance

#ask for address
POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: 795d75d7-1e8d-4fbc-a8e7-2b0e44acdd43,8c5b55ff-8354-43b6-be44-200722e41f04
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 119
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[{"intent":"actions.intent.TEXT",
"rawInputs":[{"query":"what is the address"}]}]

}


#goodby
POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: 258472ce-9df4-4e3b-a308-3f25960a8d88,f0aa1934-3982-48fc-83db-c84e20f7b753
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 107
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[{"intent":"actions.intent.TEXT",
"rawInputs":[{"query":"Goodbye"}]}]

}

