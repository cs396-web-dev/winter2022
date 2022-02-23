import utils
utils.modify_system_path()

import unittest

# import the tests you want to run:
from tests.test_bookmarks import TestBookmarkListEndpoint
from tests.test_comments import TestCommentListEndpoint, TestCommentDetailEndpoint
from tests.test_followers import TestFollowerListEndpoint
from tests.test_following import TestFollowingListEndpoint
from tests.test_like_post import TestLikePostListEndpoint
from tests.test_login import TestLoginEndpoint
from tests.test_logout import TestLogoutEndpoint
from tests.test_posts import TestPostListEndpoint, TestPostDetailEndpoint
from tests.test_profile import TestProfileEndpoint
from tests.test_stories import TestStoryListEndpoint
from tests.test_suggestions import TestSuggestionsEndpoint
from tests.test_token import TestTokenEndpoint, TestRefreshTokenEndpoint


if __name__ == '__main__':
    unittest.main()

# Note: to run on command line (from the tests directory): 
# $ python3 run_tests.py -v
# $ python3 run_tests.py TestPostListEndpoint -v
# $ python3 run_tests.py TestPostDetailEndpoint -v
# $ python3 run_tests.py TestFollowingListEndpoint -v
