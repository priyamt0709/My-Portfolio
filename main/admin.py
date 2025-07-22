from django.contrib import admin
from .models import ContactMessage, Project
from django.contrib import admin
from .models import ContactMessage, Project
from django.utils.html import format_html

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'preview', 'link')
    readonly_fields = ('preview',)

    def preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="150" style="border-radius:4px;" />', obj.image.url)
        return "No Image"
    preview.short_description = "Image Preview"

admin.site.register(ContactMessage)

