"""This module defines the views for api app
"""
from api.models import User, Complaint, CompTypes, Region
from api.serializer import MyTokenObtainPairSerializer, RegisterPublicSerializer, ComplaintSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes


class MyTokenObtainPairView(TokenObtainPairView):
    """Token view
    """
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    """User registering view
    """
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterPublicSerializer

class ComplaintView(generics.CreateAPIView):
    """Complaint registering view
    """
    queryset = Complaint.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = ComplaintSerializer
    

@api_view(['GET'])
def getRoutes(request):
    """ Returns available routes
    """
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    """Test end point for get and post method
    """
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getRegions(request, email=None):
    """Returns region data
    """
    if request.method == 'GET':
        region = []
        for obj in Region.objects.all():
            region.append(obj.__dict__['name'])
        return Response({'response': region}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCompTypes(request):
    """Returns complaints types
    """
    if request.method == 'GET':
        ctypes = []
        for obj in CompTypes.objects.all():
            ctypes.append(obj.__dict__['name'])
        return Response({'response': ctypes}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([IsAuthenticated])
def complaints(request, email=None):
    """Returns complaints
    """
    print(email)
    if request.method == 'GET':
        cmplts = []
        for obj in Complaint.objects.all():
            if obj.__dict__['email'] == email:
                cmplts.append(obj.to_dict())
        return Response({'response': cmplts}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)
