from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail


@csrf_exempt
def index(request):
    template = loader.get_template('index.html')
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        subject = request.POST['subject']
        message = request.POST['message']
        msg = '{} от {} ({})'.format(message, name, email)
        send_mail(
            subject,
            msg,
            'z@tendermarkt.ru',
            ['sergey.nikitin@tendermarkt.ru'],
            fail_silently=False
        )
    return HttpResponse(template.render())
