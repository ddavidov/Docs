var populateWindow = function(link) {
	$.get(here + 'docs/' + link, function(response) {

		// Check for snippets
		var reg = new RegExp(/{(.)*}/gm);
		var snippets = response.match(reg);

		html = response;

		if (snippets.length > 0) {
			snippets.forEach(function(snp){
				var snippet = snp.substring(1, snp.length - 1);
				snippet = snippet.split(",");
				var url = snippet[0];
				var data = JSON.parse(snippet[1]);

				data = new EJS({url: url}).render(data);

				html = html.replace(snp, data);
			});
		}

		$('#docwin').html(marked(html));
	});

	$('.nav-list li').each(function(i, item) {
		if ($(item).find('a').length == 0) {
			$(item).addClass('nav-header');
		}
	});

	$('.nav-list a, .mainmenu a').each(function(i, item) {
		if (link == $(item).attr('href'))
		{
			$(item).parents('li').addClass('active');
		}
		else
		{
			$(item).parents('li').removeClass('active');
		}		
	});
}

var populateMenu = function(section) {
	$.get(here + 'docs/menus/menu_' + section + '.md', function (response) {
		$('#doc-menu').html(marked(response));
		$('#doc-menu ul').addClass('nav').addClass('nav-list');

		$('.nav-list li').each(function(i, item) {
			if ($(item).find('a').length == 0) {
				$(item).addClass('nav-header');
			}
		});
	})
}

$(document).ready(function(){
	var urlParts = document.URL.split('?', 2);
	state = {};
	here = urlParts[0];

	if (urlParts.length > 1) {
		var currentDoc = urlParts[1] + '.md';
	} else {
		var currentDoc = "GettingStarted/introduction.md";
	}

	marked.setOptions({
		gfm: true,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		breaks: true,
		highlight: function(code, lang) {
			var that;
			Rainbow.color(code, lang, function(hl_code) { that = hl_code; });
			return that;
		}
	})
	populateMenu('intro');
	populateWindow(currentDoc);

	$(document).on('click', '#main a, .mainmenu a', function(event){
		var target = $(this);
		if (target.attr('href').substring(0, 4) != 'http' && target.attr('href').substring(0, 1) != '#') {
			event.stopPropagation();
			populateWindow(target.attr('href'));
			populateMenu(target.data('menu'));
			history.pushState(state, target.attr('href'), "?" + target.attr('href').replace('.md', ''));
			return false;
		}
	});
});