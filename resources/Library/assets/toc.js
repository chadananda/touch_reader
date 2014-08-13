

// this demonstrates extracting a table of contents from
// Ocean formatted HTML
// With minor modificaiton it could also work with standard Epub HTML
// Which uses H3 tags for sub headers.
//

$(function() {
  var toc='', title, id, date, sectionnum;
  var section_headers = $("section[id].content").size();

//console.log(section_headers);

  $("section[id].content, h3[id]").each(function(i) {
    title = $(this).attr('data-title') ? $(this).attr('data-title').trim() : '';
    id = $(this).attr('id').trim();
    sectionnum = $(this).attr('data-sectionnum') ? $(this).attr('data-sectionnum').trim()+'. ' : '';

    //console.log(title + ' ' + id + ' ' + sectionnum);

    if (title === '') {
      if (this.tagName === 'SECTION') {
        // try to get section header title
        if (title = $(this).find('div.section_header div.title').text().trim()) {
          sectionnum = $(this).find('div.section_header div.sectionnum').text().trim();
          sectionnum = sectionnum ? sectionnum +'. ' : '';
          if (date = $(this).find('div.section_header div.date').text().trim()) {
             title = date.trim() + ', '+ title.trim();
          }
        }
      } else if (this.tagName === 'H3') {
        // get h3 text as title
        title = $(this).text();
      } else {
        title = this.tagName;
      }
    }
    if ((title != '') && (id != '')) {
      if (this.tagName === 'SECTION' || (section_headers===0)) {
        toc = toc + "<li class='section_title'>"+ sectionnum +" <a href='#" + id + "' title='" + title + "'>" + title + "</a></li>";
      } else if (this.tagName === 'H3') {
        toc = toc + "<li class='subtitle'><a href='#" + id + "' title='" + title + "'>" + title + "</a></li>";
      }
    }
  });

  if (toc.length>1) $("section.toc").html('<ul>' + toc + '</ul>  ');
   else $('section.toc').hide();

});