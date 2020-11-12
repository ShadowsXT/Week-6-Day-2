const boxes = [
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
    {
        box: true,
    },
];

boxes.forEach(function(item) {
    $('#mainContainer').append('<div class = grayBox></div>');
});

$('.grayBox').on('click', function() {
    $(this).toggleClass('lightBox');
});