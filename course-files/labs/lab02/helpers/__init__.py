# dummy helper class for spoofing a logged in user
class CurrentUser(object):
    def __init__(self, *args, **kwargs):
        self.first_name = kwargs.get('first_name')
        self.last_name = kwargs.get('last_name')
        self.email = kwargs.get('email')
        self.username = kwargs.get('username')

    def get_full_name(self):
        return self.first_name + ' ' + self.last_name