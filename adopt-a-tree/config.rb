# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"

# Set asset subdirectories
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "../images"
javascripts_dir = "javascripts"

images_path = "/Users/bpye/Documents/Projects/adopt-a-tree/images/"
add_import_path "/Users/bpye/Documents/Projects/adopt-a-tree/global-stylesheet/"

# Set the images directory relative to your http_path or change
# the location of the images themselves using http_images_path:
# http_images_dir = "assets/images"

# Production Assets URL
# http_images_path = "http://"your url goes here"/img"

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# Set the prefered syntax
preferred_syntax = :scss

# You can select your preferred output style here (can be overridden via the command line):
# Development
output_style = :expanded
environment = :development

# Production
# output_style = :compressed
# environment = :production

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
