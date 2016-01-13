function go (DATA) {

  var translateReddit = function(linkJSON){

    var a = [];

    var translateRedditRecursive = function(replies){
      if(! replies)
        return;

      var children = replies.data.children;
      for(var i = 0; i < children.length; ++i){
        if(!children[i].data.body)
          continue;
        translateRedditRecursive(children[i].data.replies)
        delete children[i].replies;
        children[i].data.parent_id = children[i].data.parent_id.substr(3);
        a.push(children[i].data);
      }

    }

    var first = linkJSON[0].data.children[0].data;

    if(!!first.selftext)
      first.body = first.selftext;
    else
      first.body = first.url

    delete first.score;
    a.push(first);

    translateRedditRecursive(linkJSON[1]);

    return a;
  }

  var reddit = [{"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t3", "data": {"domain": "marxists.org", "banned_by": null, "media_embed": {}, "subreddit": "philosophy", "selftext_html": null, "selftext": "", "likes": null, "suggested_sort": null, "user_reports": [], "secure_media": null, "link_flair_text": "Article", "id": "3fqiay", "from_kind": null, "gilded": 0, "archived": false, "clicked": false, "report_reasons": null, "author": "mosestrod", "media": null, "name": "t3_3fqiay", "score": 101, "approved_by": null, "over_18": false, "hidden": false, "thumbnail": "", "subreddit_id": "t5_2qh5b", "edited": false, "link_flair_css_class": "article", "author_flair_css_class": null, "downs": 0, "mod_reports": [], "secure_media_embed": {}, "saved": false, "removal_reason": null, "stickied": false, "from": null, "is_self": false, "from_id": null, "permalink": "/r/philosophy/comments/3fqiay/the_hegel_myth_and_its_method_by_walter_kaufmann/", "hide_score": false, "created": 1438716904.0, "url": "https://www.marxists.org/reference/subject/philosophy/works/us/kaufmann.htm", "author_flair_text": null, "title": "The Hegel Myth and Its Method by Walter Kaufmann", "created_utc": 1438688104.0, "ups": 101, "upvote_ratio": 0.81, "num_comments": 22, "visited": false, "num_reports": null, "distinguished": null}}], "after": null, "before": null}}, {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrqhy0", "gilded": 0, "archived": false, "report_reasons": null, "author": "IAMACOWAMA", "parent_id": "t1_ctr9jat", "score": 1, "approved_by": null, "controversiality": 0, "body": "I've only read Hegel's translations of Nietzsche and his work on some other Existentialists but this sounds very interesting. Do you know if his translation and commentary on Preface to the Phenomenology of Spirit is available online?", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;I&amp;#39;ve only read Hegel&amp;#39;s translations of Nietzsche and his work on some other Existentialists but this sounds very interesting. Do you know if his translation and commentary on Preface to the Phenomenology of Spirit is available online?&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrqhy0", "created": 1438761766.0, "author_flair_text": null, "created_utc": 1438732966.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 1}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctr9jat", "gilded": 0, "archived": false, "report_reasons": null, "author": "bat020", "parent_id": "t3_3fqiay", "score": 13, "approved_by": null, "controversiality": 0, "body": "Kaufmann is brilliant and sadly neglected these days. His translation of and commentary on Hegel's Preface to the Phenomenology of Spirit is by far the best English language rendition of Hegel I've read. Pity he didn't do more. And this is a fabulous takedown of Popper's fatuously ignorant but hugely influential dismissal of Hegel.", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;Kaufmann is brilliant and sadly neglected these days. His translation of and commentary on Hegel&amp;#39;s Preface to the Phenomenology of Spirit is by far the best English language rendition of Hegel I&amp;#39;ve read. Pity he didn&amp;#39;t do more. And this is a fabulous takedown of Popper&amp;#39;s fatuously ignorant but hugely influential dismissal of Hegel.&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr9jat", "created": 1438736288.0, "author_flair_text": null, "created_utc": 1438707488.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 13}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctr6qv9", "gilded": 0, "archived": false, "report_reasons": null, "author": "TrigThaTaco", "parent_id": "t3_3fqiay", "score": 6, "approved_by": null, "controversiality": 0, "body": "&gt;A detailed account of his almost incredibly unemotional style as a lecturer has been given by one of his students, H. G. Hotho, and is quoted in Hermann Glockner\u2019s Hegel (1, 440 ff.), and in Kuno Fischer\u2019s Hegel\n\nDoes anyone have this story? ", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;blockquote&gt;\n&lt;p&gt;A detailed account of his almost incredibly unemotional style as a lecturer has been given by one of his students, H. G. Hotho, and is quoted in Hermann Glockner\u2019s Hegel (1, 440 ff.), and in Kuno Fischer\u2019s Hegel&lt;/p&gt;\n&lt;/blockquote&gt;\n\n&lt;p&gt;Does anyone have this story? &lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr6qv9", "created": 1438732189.0, "author_flair_text": null, "created_utc": 1438703389.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 6}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrcw4n", "gilded": 0, "archived": false, "report_reasons": null, "author": "Mrhegel", "parent_id": "t3_3fqiay", "score": 6, "approved_by": null, "controversiality": 0, "body": "Great article by Kaufmann. Really well written and a great example of how someone can use misinformation to manipulate readers. Popper clearly banks on the fact that his readers are very unfamiliar with Hegel and can use that fact to make his own ideas look great. Especially when saying that his ideas can be seen in the Nazi belief. I dont believe Hegel would have been to happy with that. His ideas are too rational to be thrown in with the irrational way the Nazi party operated. Especially if you look at the way the Right Hegelians took his teachings. They believed that the State was the Ideal and to push for political change was an attack on not only the nation, but the people that the nation stood for. This is also kind of ironic seeing as his master-slave dialectic was a big influence on Marx and his ideas about class struggle. ", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;Great article by Kaufmann. Really well written and a great example of how someone can use misinformation to manipulate readers. Popper clearly banks on the fact that his readers are very unfamiliar with Hegel and can use that fact to make his own ideas look great. Especially when saying that his ideas can be seen in the Nazi belief. I dont believe Hegel would have been to happy with that. His ideas are too rational to be thrown in with the irrational way the Nazi party operated. Especially if you look at the way the Right Hegelians took his teachings. They believed that the State was the Ideal and to push for political change was an attack on not only the nation, but the people that the nation stood for. This is also kind of ironic seeing as his master-slave dialectic was a big influence on Marx and his ideas about class struggle. &lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrcw4n", "created": 1438741066.0, "author_flair_text": null, "created_utc": 1438712266.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 6}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrjp26", "gilded": 0, "archived": false, "report_reasons": null, "author": "Capn_Fappn", "parent_id": "t1_ctr4cf7", "score": 1, "approved_by": null, "controversiality": 0, "body": "I can't believe you humorless dipshits would downvote such brilliance.", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;I can&amp;#39;t believe you humorless dipshits would downvote such brilliance.&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrjp26", "created": 1438750714.0, "author_flair_text": null, "created_utc": 1438721914.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 1}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctr4cf7", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t3_3fqiay", "score": -25, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr4cf7", "created": 1438728360.0, "author_flair_text": null, "created_utc": 1438699560.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": -25}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrgsur", "gilded": 0, "archived": false, "report_reasons": null, "author": "PresidentCleveland", "parent_id": "t1_ctrgonc", "score": 0, "approved_by": null, "controversiality": 0, "body": "It's the website it's from. ", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;It&amp;#39;s the website it&amp;#39;s from. &lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrgsur", "created": 1438746599.0, "author_flair_text": null, "created_utc": 1438717799.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 0}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctrgonc", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctrgls9", "score": 2, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrgonc", "created": 1438746440.0, "author_flair_text": null, "created_utc": 1438717640.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 2}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctrgls9", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctrd8tb", "score": 0, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrgls9", "created": 1438746331.0, "author_flair_text": null, "created_utc": 1438717531.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 0}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctrd8tb", "gilded": 0, "archived": false, "report_reasons": null, "author": "mosestrod", "parent_id": "t1_ctragnq", "score": 6, "approved_by": null, "controversiality": 0, "body": "it doesn't show a damn thing. Marxists.org is just a good resource in a good easy to read format. Next you'll be saying the Stanford Encyclopedia of Philosophy is just a bourgeois liberal source that reflects the hegemony of 'mainstream' academic interpretations of philosophers or an anglo-american tending source...or something. Marxists.org has works by most major philosophers in the western tradition.", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;it doesn&amp;#39;t show a damn thing. Marxists.org is just a good resource in a good easy to read format. Next you&amp;#39;ll be saying the Stanford Encyclopedia of Philosophy is just a bourgeois liberal source that reflects the hegemony of &amp;#39;mainstream&amp;#39; academic interpretations of philosophers or an anglo-american tending source...or something. Marxists.org has works by most major philosophers in the western tradition.&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrd8tb", "created": 1438741575.0, "author_flair_text": null, "created_utc": 1438712775.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 6}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrb0vd", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctragnq", "score": 3, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrb0vd", "created": 1438738423.0, "author_flair_text": null, "created_utc": 1438709623.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 3}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctragnq", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctrafhc", "score": -12, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctragnq", "created": 1438737629.0, "author_flair_text": null, "created_utc": 1438708829.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": -12}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctrafhc", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctr9d3a", "score": 5, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrafhc", "created": 1438737579.0, "author_flair_text": null, "created_utc": 1438708779.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 5}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctr9d3a", "gilded": 0, "archived": false, "report_reasons": null, "author": "PresidentCleveland", "parent_id": "t1_ctr94b8", "score": -12, "approved_by": null, "controversiality": 0, "body": "I know who Kaufmann is. I wasn't commenting on him, I was commenting on the website being linked.", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;I know who Kaufmann is. I wasn&amp;#39;t commenting on him, I was commenting on the website being linked.&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr9d3a", "created": 1438736037.0, "author_flair_text": null, "created_utc": 1438707237.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": -12}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctr94b8", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctr8tv9", "score": 9, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr94b8", "created": 1438735692.0, "author_flair_text": null, "created_utc": 1438706892.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 9}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": {"kind": "Listing", "data": {"modhash": "", "children": [{"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrgqoi", "gilded": 0, "archived": false, "report_reasons": null, "author": "PresidentCleveland", "parent_id": "t1_ctraqda", "score": 1, "approved_by": null, "controversiality": 0, "body": "That can be found anywhere else. I don't see what your point is, Mr Taylor seems to be a Marxist. ", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;That can be found anywhere else. I don&amp;#39;t see what your point is, Mr Taylor seems to be a Marxist. &lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrgqoi", "created": 1438746517.0, "author_flair_text": null, "created_utc": 1438717717.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 1}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctraqda", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctr8tv9", "score": 5, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctraqda", "created": 1438738012.0, "author_flair_text": null, "created_utc": 1438709212.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": 5}}, {"kind": "t1", "data": {"subreddit_id": "t5_2qh5b", "banned_by": null, "removal_reason": null, "link_id": "t3_3fqiay", "likes": null, "replies": "", "user_reports": [], "saved": false, "id": "ctrdvo6", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t1_ctr8tv9", "score": -3, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctrdvo6", "created": 1438742493.0, "author_flair_text": null, "created_utc": 1438713693.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": -3}}], "after": null, "before": null}}, "user_reports": [], "saved": false, "id": "ctr8tv9", "gilded": 0, "archived": false, "report_reasons": null, "author": "[deleted]", "parent_id": "t3_3fqiay", "score": -23, "approved_by": null, "controversiality": 0, "body": "[deleted]", "edited": false, "author_flair_css_class": null, "downs": 0, "body_html": "&lt;div class=\"md\"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;", "subreddit": "philosophy", "score_hidden": false, "name": "t1_ctr8tv9", "created": 1438735271.0, "author_flair_text": null, "created_utc": 1438706471.0, "distinguished": null, "mod_reports": [], "num_reports": null, "ups": -23}}], "after": null, "before": null}}]


  var testdata = [
    {
      _id:"1",
      body:"first!",
      target_id:null
    },
    {
      _id:"2",
      body:"second",
      target_id:"1"
    },
    {
      _id:"3",
      body:"third",
      target_id:"1"
    },
    {
      _id:"4",
      body:"fourther",
      target_id:"2"
    },
    {
      _id:"5",
      body:"figth",
      target_id:"3"
    },
    {
      _id:"6",
      body:"6th",
      target_id:"2"
    }
  ]

  var onmouseover = function(data){
    console.log(data);
    d3.select("#body-text").text(data.body);
    d3.select("#author-text").text(data.author);
    d3.select("#author-score").text(data.score + " points ");
    if(data.replies.data !== undefined){
      d3.select("#author-vigor").text(data.replies.data.children.length + " vigor");
    } else {
      d3.select("#author-vigor").text(" No vigor");
    }
  }

  var redditmap = {
    target_id:"parent_id",
    _id:"id",
    value:"score"
  }

  var wWidth = window.innerWidth;
  var wHeight = window.innerHeight;

  var body = d3.select("body");

  body
    .append("svg")
      .attr("id", "graph")
      .attr("width", wWidth * .6)
      .attr("height", wHeight * .98)
      .attr("style", "float:right;")

  var infoContainer = body
    .append("div")
      .attr("width", wWidth * .4);

  var viewer = infoContainer.append("div")
    .attr("id", "viewer")

  viewer
    .append("span")
      .attr("id", "author-text")
  viewer
    .append("span")
      .attr("id", "author-score")

  viewer
    .append("span")
      .attr("id", "author-vigor")

  viewer
    .append("p")
      .attr("id", "body-text");

  // var nebula = new Nebula("#graph", 800, 600, onmouseover, testdata);
  nebula = new Nebula("#graph", 800, 600, onmouseover, translateReddit(DATA), redditmap);
}

function stop() {
  d3.selectAll("svg > *").remove();
  $('#graph + div').remove();
  $('#graph').remove();
}
